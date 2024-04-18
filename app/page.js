"use client";

// core components
import { useState, useEffect } from "react";

// next js components
import Image from "next/image";

// custom components
import Col from "../components/Col";
import Container from "../components/Container"
import List from "../components/List";
import Row from "../components/Row";
import Tabs from "../components/Tabs";

import { 
  getGeoLocation,
  getPeople,
  getWeatherDataByLatLon
} from "../lib/api";

const Homepage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  useEffect(() => {
    getGeoLocation().then((position) => {
      // console.log(position);
      setLocation(position);
    })
    .catch((error) => {
      // console.log(error);
      setErrorMsg(error);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWeatherDataByLatLon(location);
      setWeatherData(response);
    };
    location ? fetchData() : null;
  }, [location]); // when location changes, useEffect triggers; [] is a "dependency"

useEffect(() => {
  // filter out the days of the week
  const tempWeek = [];

  weatherData && weatherData.list.filter((block) => {
    const date = new Date(block.dt * 1000);
    const options = { weekday: "short" };
    const day = date.toLocaleDateString("en-US", options);
    // console.log(day);
    if (!tempWeek.includes(day)) {
      tempWeek.push(day);
    }
  });

  setDaysOfWeek(tempWeek);

  // then set state with the days of the week
}, [weatherData]);

  return (
    <Container>
      <h1>Weather App</h1>
      {errorMsg && <div>{errorMsg}</div>}
      {weatherData && (
        <Row>
          <Col>
            <h2>{weatherData.city.name}</h2>
            <p>Current Temp: {weatherData.list[0].main.temp}&deg; F</p>
            <p>{weatherData.list[0].weather[0].description}</p>
            <Image 
              src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
              alt={`Weather Icon`}
              width={100}
              height={100}
            />
          </Col>
          <Col>
            Tabs and List goes here.
          </Col>
        </Row>
      )}
      {weatherData && daysOfWeek && (
        <section>
          <Tabs
            activeIndex={activeDayIndex}
            items={daysOfWeek} 
            clickHandler={setActiveDayIndex}
          />
          <List 
            activeIndex={activeDayIndex}
            items={weatherData?.list}
            daysOfWeek={daysOfWeek}
          />
        </section>
      )}
    </Container>
  );
};
export default Homepage;