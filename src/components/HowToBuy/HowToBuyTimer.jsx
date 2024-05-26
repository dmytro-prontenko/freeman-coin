import * as Stayles from "./HowToBuy.styled.js";
import { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  let difference = +new Date("2024-06-09") - +new Date();
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

const HowToBuyTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Stayles.AppContainer>
      <Stayles.TimerContainer>
        <Stayles.Timer>
          <Stayles.TimerElement>
            {timeLeft.days || "0"} <Stayles.TimerLabel>дней</Stayles.TimerLabel>
          </Stayles.TimerElement>
          <>:</>
          <Stayles.TimerElement>
            {timeLeft.hours || "0"}
            <Stayles.TimerLabel>часов</Stayles.TimerLabel>
          </Stayles.TimerElement>
          <>:</>
          <Stayles.TimerElement>
            {timeLeft.minutes || "0"}
            <Stayles.TimerLabel>минут</Stayles.TimerLabel>
          </Stayles.TimerElement>
          <>:</>
          <Stayles.TimerElement>
            {timeLeft.seconds || "0"}
            <Stayles.TimerLabel>секунд</Stayles.TimerLabel>
          </Stayles.TimerElement>
        </Stayles.Timer>
      </Stayles.TimerContainer>
    </Stayles.AppContainer>
  );
};

export default HowToBuyTimer;
