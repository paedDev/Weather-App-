import React, { useEffect, useState } from "react";
import Search from "../search";
export default function Weather() {
  const [search, setSearch] = useState("");
  const [pending, setPending] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setPending(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f2ed01c9a8c97a0d0561737e6717ebbb`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setWeatherData(data);
        setPending(false);
        setSearch("");
      }
    } catch (error) {
      setPending(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchWeatherData("Baguio");
  }, []);
  //f2ed01c9a8c97a0d0561737e6717ebbb
  function handleSearch() {
    fetchWeatherData(search);
  }
  console.log(weatherData);
  function getCurrentDate() {
    return new Date().toLocaleDateString(`en-us`, {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {pending ? (
        <div className="text-4xl font-bold text-black">Loading ...</div>
      ) : (
        <div className="space-y-2">
          <div className="mb-5 text-2xl font-bold">
            <h2>
              {weatherData?.name},<span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="text-2xl font-extralight italic">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="text-6xl text-black font-semibold text-center">
            {weatherData?.main?.temp}
          </div>
          <p className="text-black text-2xl font-semibold">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="flex justify-evenly mt-10 px-10 items-center text-xl font-bold text-center">
            <div className="flex items-center  ">
              <div>
                <p>{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <p>{weatherData?.main?.humidity}</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
