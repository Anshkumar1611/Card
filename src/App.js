import "./App.css";
import Tag from "./components/Tag";
import Bar from "./components/Bar";
import Select from "./components/Select";
import { useState } from "react";


function App() {
  const currency = "SAR";
  const spent = "502.5";
  const tags = [
    { text: "Food", percent: "60%", color: "#FFB800" },
    { text: "Shopping", percent: "30%", color: "#1BA493" },
    { text: "Movies", percent: "10%", color: "#E44816" },
  ];
  const [, setSelected] = useState("this week")

  return (
    <div
      className="flex justify-center items-center h-screen text-white font-poppins"
    >
      <div
        className="flex flex-col shadow p-8 w-[333px] bg-[#3F3F3F] gap-[26px] rounded-xl"
      >
        <div
          className="flex justify-between items-center"
        >
          <h1 className="font-bold">Your total spend</h1>
          <Select setSelected={setSelected} />
        </div>
        <div className="flex items-baseline " >
          <div>
            {currency}
          </div>
          <div className="text-3xl ml-2">
            {spent}
          </div>
        </div>
        <div>
          <div
            className="flex flex-row h-2 w-full"
          >
            {tags.map((tag, index) => {
              return <Bar key={index} tag={tag} index={index} len={tags.length} />;
            })}
          </div>
          <div className="tags flex mt-3 text-xs font-normal">
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;