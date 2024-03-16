import React, { useState, useEffect } from 'react';
import "../assets/css/Home.scss";

function CountdownTimer({ endDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const renderTime = (value, label) => (
    <div className="time-container">
      <div className="time-value">{value.toString().padStart(2, '0')}</div>
      <div className="time-label">{label}</div>
    </div>
  );

  return (
    <div className="countdown-timer">
     
      <div className="timer">
        {renderTime(timeLeft.days, 'Days')}
        {renderTime(timeLeft.hours, 'Hours')}
        {renderTime(timeLeft.minutes, 'Minutes')}
        {renderTime(timeLeft.seconds, 'Seconds')}
      </div>
    </div>
  );
}

export default CountdownTimer;
