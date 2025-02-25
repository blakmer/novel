import "./App.css";
import { BarChart } from "./components";

function App() {
  const data = [
    { index: "name", value: 10 },
    { index: "name2", value: 5 },
    { index: "name3", value: 12 },
    { index: "name4", value: 11 },
    { index: "name5", value: 5 },
    { index: "name6", value: 3 },
    { index: "name7", value: 2 },
    { index: "name8", value: 5 },
    { index: "name9", value: 9 },
    { index: "name10", value: 1 },
  ];

  return (
    <>
      <div className="card">
        <BarChart data={data} />
      </div>
    </>
  );
}

export default App;
