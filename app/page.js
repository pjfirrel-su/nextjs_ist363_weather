"use client";

import { useState } from "react";

import Button from "../components/Button";
import ColorPicker from "../components/ColorPicker";

const Homepage = () => {
const [count, setCount] = useState(0);
const [isVisible, setIsVisible] = useState(false);

  return (
  <div>
    <h1>Weather App</h1>
    <h2>Count: {count}</h2>
    <Button 
      label="Increment"
      clickHandler={() => {setCount(count + 1);
      }}
    />
    <Button
      label="Decrement"
      clickHandler={() => {setCount(count - 1);
      }}
    />
    <Button label="Download" />
    <Button label="Register Now"/>
    <Button label="Learn More"/>

    {count > 5 && <div>Special Message</div>}
  
    <br />
    <br />
    <Button
      label={isVisible ? "Hide Message" : "Show Message"}
      clickHandler={() => {
        setIsVisible(!isVisible);
      }}
    />

    {isVisible && <p>Hello, world!</p>}

    <ColorPicker />

  </div>
  );
};
export default Homepage;