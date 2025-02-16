import React, { useEffect, useState } from "react";

import Search2 from "../search2/search2";
export default function Weather2() {
  const [search, setSearch] = useState("");
  const [weather2Data, setWeather2Data] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //
  //
  async function fetchWeatherApi(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f2ed01c9a8c97a0d0561737e6717ebbb`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setWeather2Data(data);
        setLoading(false);
        setSearch("");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchWeatherApi("baguio");
  }, []);
  const handleSearch = () => {
    fetchWeatherApi(search);
  };
  const handleGetDate = () => {
    return new Date().toLocaleDateString(`en-us`, {
      weekday: "long",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };
  return (
    <div className="bg-gray-100 p-2 mt-20 w-4/5 m-auto  h-[550px] shadow-xl rounded-xl">
      <Search2
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex  justify-evenly">
          <img
            className="w-40 h-40 mix-blend-multiply"
            src="https://thumbs.dreamstime.com/b/sun-holding-cloud-icon-cute-kawaii-face-cartoon-funny-smiling-character-good-morning-hello-summer-sunshine-yellow-color-baby-194390097.jpg"
            alt=""
          />
          <div className="space-y-2">
            <div className="text-sm font-semibold">{handleGetDate()}</div>
            <h2 className="text-4xl font-bold">
              {weather2Data?.name}, <span>{weather2Data?.sys?.country}</span>
            </h2>
            <h2>{weather2Data?.main?.temp}</h2>
            <h2>
              {weather2Data && weather2Data.weather && weather2Data.weather[0]
                ? weather2Data.weather[0].description
                : " "}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
