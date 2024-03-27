import React, { useState, useEffect } from 'react';
 // Assuming you have the CSS file
// You can put your global styles here

const Bars = [
  ['end', 'top'],
  ['side', 'top', 'left'],
  ['side', 'top', 'right'],
  ['middle'],
  ['side', 'bottom', 'left'],
  ['side', 'bottom', 'right'],
  ['end', 'bottom']
];

const Digit = ({ digit }) => {
  return (
    <figure className="digit" data-digit={digit}>
      {Bars.map((classes, index) => (
        <span key={index} className={classes.join(' ')}></span>
      ))}
    </figure>
  );
};

const Group = ({ number }) => {
  const digits = number.toString().padStart(2, '0').split('').map((digit, index) => (
    <Digit key={index} digit={digit} />
  ));

  return <div className="group">{digits}</div>;
};

const Colon = () => {
  return (
    <div className="colon-group">
      <figure className="colon">
        <span></span>
      </figure>
      <figure className="colon shadow shadow1">
        <span></span>
      </figure>
      <figure className="colon shadow shadow2">
        <span></span>
      </figure>
    </div>
  );
};

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="wrapper">
      <main>
        <Group number={hours} />
        <Colon />
        <Group number={minutes} />
        <Colon />
        <Group number={seconds} />
      </main>
    </div>
  );
};

export default Clock;
