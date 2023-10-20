import { useState } from "react";
import { useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const data = [
  { title: "React" },
  { title: "Tailwind" },
  { title: "Typescript" },
  { title: "NextJS" },
  { title: "Figma" },
  { title: "Framer motion" }
];

export default function ShareableList() {
  // sender and receiver list content holder
  const [senderList, setSenderList] = useState([]);
  const [receiverList, setReceiverList] = useState([]);

  // to store the selected items
  const [storage, setStorage] = useState([]);

  // by-default, senderlist is going to contain all the items
  // Therefore, adding all the items to senderList
  useEffect(() => {
    setSenderList(data);
  }, []);

  // handler to transfer data from sender to receiver
  const transferToReceiver = () => {
    if (!storage.length) return;
    // append the storage into receiver list
    setReceiverList([...receiverList, ...storage]);
  }

  // removal of sender items that are copied to receiver list
  useEffect(() => {
    if (receiverList.length) {
      console.log("receiver", receiverList);
      // removing common storage items form sender list
      const _senderList = senderList.filter((item, index) => {
        return receiverList[index] !== item;
      });

      // updating the sender list after sending storage items to receiver list
      setSenderList([..._senderList]);
      // storage cleanup
      setStorage([]);
    }
  }, [receiverList]);

  // handle to transfer data from receiver to sender
  const transferToSender = () => {

  }

  return (
    <div className="shareable-list-component-container grid grid-cols-1 gap-3 w-[720px]">
      <div className="sender-list-content p-3 rounded-lg border border-neutral-200 shadow-inner bg-neutral-50 h-[60px] flex flex-row items-center justify-start gap-3 overflow-x-scroll">
        {senderList.map((item, index) => {
          return (
            <ShareableItem
              title={item.title}
              storage={storage}
              setStorage={setStorage}
              key={index}
            />
          )
        })}
      </div>
      <div className="list-actions-layer flex flex-row items-center justify-center gap-3">
        <button
          className="truncate px-3 py-1.5 rounded-md shadow-md border border-transparent bg-gradient-to-b from-neutral-700 to-neutral-800 text-neutral-50"
          onClick={transferToSender}
        >
          <FaArrowUp />
        </button>
        <button
          className="truncate px-3 py-1.5 rounded-md shadow-md border border-transparent bg-gradient-to-b from-neutral-700 to-neutral-800 text-neutral-50"
          onClick={transferToReceiver}
        >
          <FaArrowDown />
        </button>
      </div>
      <div className="sender-list-content p-3 rounded-lg border border-neutral-200 shadow-inner bg-neutral-50 h-[60px] flex flex-row items-center justify-start gap-3 overflow-x-scroll">
        {receiverList.map((item, index) => {
          return (
            <ShareableItem
              title={item.title}
              storage={storage}
              setStorage={setStorage}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

function ShareableItem({ title, storage, setStorage }) {

  return (
    <div className="truncate px-3 py-1.5 rounded-md shadow-md border border-transparent bg-gradient-to-b from-neutral-700 to-neutral-800 text-neutral-50 flex flex-row items-center justify-center gap-1.5">
      {title}
      <input
        type={"checkbox"}
        id={title}
        onChange={(e) => {
          // if shareable item is check then add it into storage
          if (e.target.checked) setStorage([...storage, { title: title }]);
          else {
            let _storage = storage.filter((item) => {
              if (item.title !== title) return item;
            });
            // updating storage after removal
            setStorage(_storage);
          }
        }}
      />
    </div>
  )
}