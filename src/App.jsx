import React from "react";
import Weather from "./components/weather";
export default function App() {
  return (
    // Container
    <div className="text-center my-10 w-4/5 m-auto rounded-xl h-[500px] px-8 py-4 bg-teal-300 shadow-xl">
      <Weather />
    </div>
  );
}
