import { useEffect, useState } from "react"
import { cn } from "../scripts/cn";

export default function Radius() {
  const [childRadius, setChildRadius] = useState(8);
  const [distance, setDistance] = useState(6);
  const [parentRadius, setParentRadius] = useState(childRadius + distance);

  useEffect(() => {
    setParentRadius(childRadius + distance);
  }, [distance, childRadius]);

  useEffect(() => {
    setChildRadius(parentRadius - distance);
  }, [distance]);

  return (
    <div className="radius-demo-component-container">
      <h1 className="leading-snug tracking-tighter font-medium text-2xl">
        {"valid radius example"}
      </h1>
      <div className="radius-demo-component mt-12">
        <div className="demo-render">
          <div className={cn("parent-container bg-black w-fit mx-auto")}
            style={{
              borderRadius: `${parentRadius}px`,
              padding: `${distance}px`
            }}
          >
            <div className={cn("child-container w-32 h-16 bg-neutral-200")}
              style={{
                borderRadius: `${childRadius}px`
              }}>
            </div>
          </div>
        </div>
        <div className="actions-container mt-12 w-fit mx-auto">
          <div>
            <p>size</p>
            <input type="range" name="size" onChange={(e) => setDistance(parseInt(e.target.value))} />
          </div>
          <div>
            <p>child element radius</p>
            <input type="range" name="size" onChange={(e) => setChildRadius(parseInt(e.target.value / 2))} />
          </div>
        </div>
      </div>
    </div>
  )
}