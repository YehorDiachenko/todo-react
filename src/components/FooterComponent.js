import React from "react";
import "./Footer.css";

function Footer() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <footer>Good {timeOfDay}!</footer>
  );
}

export default Footer;
