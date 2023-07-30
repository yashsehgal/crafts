import { useEffect, useState } from "react";
import { cn } from "../scripts/cn";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

export default function GitHubComment() {
  // to manage the tab-view state: write-mode and preview-mode
  const [tabView, setTabView] = useState("write-mode");
  // to store the content inside the write-mode textarea
  const [commentContent, setCommentContent] = useState("");

  const handleCommentContentChange = (e) => {
    // updating the content on change in comment input
    setCommentContent(e.target.value);
  };

  useEffect(() => {
    let commentTextbox = document.getElementById("comment-textbox");
    commentTextbox.addEventListener('paste', pasteHandler);
    // checking if event type is PASTE and look for images 
    // to be pasted and added to comment content
    function pasteHandler(e) {
      //check if event.clipboardData is supported(chrome)
      if(e.clipboardData){
        let items = e.clipboardData.items;
        if (items) {
          for(var i=0;i<items.length;i++){
            if(items[i].kind == 'file' && items[i].type.indexOf('image') > -1){
                //need to represent the image as a file
                var blob = items[i].getAsFile();

                var reader = new FileReader();
                //need base64 to upload to server
                reader.readAsDataURL(blob);
                reader.onload = function (event) {
                    var image = new Image();
                    image.src = event.target.result;
                    setCommentContent(`\n![image-upload-${new Date().toUTCString()}](${image.src.toString()})`);
                };
            }
        }
        }
      }
    }
  }, []);

  return (
    <div className="github-comment-component-container">
      <h1 className="leading-snug text-3xl font-medium tracking-tighter">
        {"GitHub kinda comment feature."}
      </h1>
      <div className="my-12" />
      <div className="github-comment-component overflow-hidden rounded-md border border-slate-300 w-[560px]">
        <div className={cn("github-command-input-preview-wrapper")}>
          <div
            className={cn(
              "write-preview-actions-header bg-slate-200 px-4 pt-3 shadow-inner"
            )}
          >
            <div
              className={cn(
                "write-preview-actions-wrapper flex flex-row items-end justify-start gap-3"
              )}
            >
              <button
                className={cn(
                  "px-4 py-2 rounded-t-lg border-t border-l border-r border-transparent select-none",
                  tabView === "write-mode" && "bg-white border-slate-300"
                )}
                onClick={() => setTabView("write-mode")}
              >
                {"Write"}
              </button>
              <button
                className={cn(
                  "px-4 py-2 rounded-t-lg border-t border-l border-r border-transparent select-none",
                  tabView === "preview-mode" &&
                    "bg-white border-slate-300"
                )}
                onClick={() => setTabView("preview-mode")}
              >
                {"Preview"}
              </button>
            </div>
          </div>
          <div className={cn("github-comment-content-body-wrapper bg-white pt-3 pl-3 pr-3 pb-2")}>
            {tabView === "write-mode" && (
              <textarea 
                className={cn("p-3 w-full text-sm bg-slate-100/90 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 placeholder:font-mono")} 
                placeholder="Leave a comment"
                onChange={handleCommentContentChange}
                value={commentContent} 
                id="comment-textbox" />
            )}
            {tabView === "preview-mode" && (
              <>
                {!commentContent && (
                  <div className="comment-content-not-found-text-wrapper text-slate-500 py-4 select-none">
                    Nothing to preview
                  </div>
                )}
                {commentContent && (
                  <ReactMarkdown children={commentContent} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
