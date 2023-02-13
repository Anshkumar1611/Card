import "./App.css";
import Tag from "./components/Tag";
import Bar from "./components/Bar";
import Select from "./components/Select";
import { useState } from "react";


function App() {
  const [, setSelected] = useState("this week")
  const [food, setFood] = useState(260)
  const [shopping, setShopping] = useState(130)
  const [movies, setMovies] = useState(110)
  const currency = "SAR";

  const sum = food + shopping + movies
  const getPercent = (value) => (value / sum) * 100 + '%'

  const tags = [
    { text: "Food", percent: getPercent(food), color: "#FFB800" },
    { text: "Shopping", percent: getPercent(shopping), color: "#1BA493" },
    { text: "Movies", percent: getPercent(movies), color: "#E44816" },
  ];



  return (
    <div
      className="flex justify-center items-center h-screen text-white font-poppins"
    >
      <div className="flex flex-col items-center gap-4 ">

        <div className="flex flex-col shadow p-8 w-[333px] bg-[#3F3F3F] gap-[26px] rounded-xl">
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
              {sum}
            </div>
          </div>
          <div>
            <div
              className="flex flex-row h-2 w-full rounded-full overflow-x-hidden"
            >
              {tags.map((tag, index) => {
                return <Bar key={index} tag={tag} index={index} len={tags.length} />;
              })}
            </div>
            <div className="flex mt-3 text-xs font-normal">
              {tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-6 items-center">
            <label className="text-black">Food</label>
            <input type="number" placeholder="Enter the food price" value={food} onChange={(e) => setFood(Number(e.target.value))} className="input w-full max-w-xs text-black focus:outline-none border-gray-300" />
          </div>
          <div className="flex flex-row gap-6 items-center">
            <label className="text-black">Food</label>
            <input type="number" placeholder="Enter the shopping price" value={shopping} onChange={(e) => setShopping(Number(e.target.value))} className="input w-full max-w-xs text-black focus:outline-none border-gray-300" />
          </div>
          <div className="flex flex-row gap-6 items-center">
            <label className="text-black">Food</label>
            <input type="number" placeholder="Enter the movies price" value={movies} onChange={(e) => setMovies(Number(e.target.value))} className="input w-full max-w-xs text-black focus:outline-none border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;