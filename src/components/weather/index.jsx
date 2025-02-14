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
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f2ed01c9a8c97a0d0561737e6717ebbb`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setWeatherData(data);
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchWeatherData();
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
        <div>Loading ...</div>
      ) : (
        <div>
          <div>
            <h2>
              {weatherData?.name},<span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="">
            <span>{getCurrentDate()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
