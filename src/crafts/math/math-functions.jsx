import { useEffect, useState } from 'react';
import { LineChart, Line, Tooltip, Legend, XAxis, YAxis } from 'recharts';

// const data = [{ name: 'Page A', amt: 400 }, { name: 'Page A', amt: 2400 }, { name: 'Page A', amt: 2400 } ];

export default function MathFunctions() {
  const [mthFunc, setMthFunc] = useState("sine");
  const [data, setData] = useState([]);
  const [mag, setMag] = useState(10);

  useEffect(() => {
    // generating data again to get (re)rendered
    const generateData = () => {
      switch (mthFunc) {
        case "sine":
          for (let counter = -mag; counter <= mag; counter++) {
            setData([
              ...data,
              { name: counter, value: counter, wave: Math.sin(counter) },
            ]);
          }
          break;
        default: break;
      }
    };
    generateData();
  });

  return (
    <div className="math-functions-component-container">
      <h1 className="leading-snug tracking-tighter font-medium text-2xl">
        {"math functions in graphs"}
      </h1>
      <div className="math-functions-components border w-fit mt-12">
        <LineChart width={800} height={400} data={data}>
          <YAxis dataKey={"wave"} />
          <XAxis dataKey={"value"} />
          <Line type="monotone" dataKey="wave" stroke="#8884d8" />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
    </div>
  )
}