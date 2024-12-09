import React from "react";
export default function WeatherSearch() {
  return (
    <form onSubmit={handlesubmit}>
      <input type="search" placeholder="Enter a city.." />
      <input type="Submit" value="Search" />
    </form>
  );
}
