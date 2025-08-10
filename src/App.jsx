import LineChart from "./Components/LineChart/LineChart";
import PriceOptions from "./Components/PriceOptions/PriceOptions";


export default function App() {
  return (
    <>
      <h1 className="text-4xl bg-rose-300">Hello, Tailwind + React + Vite</h1>
      <PriceOptions />
      <LineChart></LineChart>
    </>
  );
}
