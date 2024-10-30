import React from "react";
import styled from "styled-components";

const ProgressBar = ({ logo, name, value, duration = 3 }) => {
  return (
    <div className="flex flex-col gap-2 text-lg font-medium max-w-[200px]"> {/* Set max width */}
      <div className="flex justify-between items-center">
        <p className="text-[1.5rem] flex items-center gap-2">
          {logo} {name}
        </p>
      </div>
      <div className="h-[4px] w-full relative rounded-3xl bg-gray-300">
        <Progress
          className="h-[4px] absolute rounded-3xl bg-yellow-500"
          style={{
            width: `${value}%`,
            animation: `progress-animation ${duration}s linear`,
          }}
        ></Progress>
      </div>
    </div>
  );
};

export default ProgressBar;

const Progress = styled.div`
  @keyframes progress-animation {
    from {
      width: 0%;
    }
    to {
      width: ${(props) => props.width};
    }
  }
`;
