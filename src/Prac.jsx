import React from 'react'

export default function Prac() {
  const name = [
    "Hamza",
    "Malik",
    "Khan",
    "Jan",
    "Ahsan"
  ]
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wedness",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]
  let date = new Date();
  return (
    <div>

      <h1>{weekdays[date.getUTCDay() - 1]}, {name[Math.trunc(Math.random() * 5) ]} </h1>

    </div>
  )
}

