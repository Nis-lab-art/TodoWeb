"use client";
import React, { useState, useEffect } from 'react';

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTimeUnit = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-4xl">
            <span style={{ '--value' : currentTime.getHours() } as any}>
                {formatTimeUnit(currentTime.getHours())}
            </span>
            </span>
            hrs
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-4xl">
            <span style={{ '--value' : currentTime.getMinutes() } as any}>
                {formatTimeUnit(currentTime.getMinutes())}
            </span>
            </span>
            min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-4xl">
            <span style={{ '--value' : currentTime.getSeconds() } as any}>
                {formatTimeUnit(currentTime.getSeconds())}
            </span>
            </span>
            sec
        </div>
    </div>
  );
};

export default CurrentTime;