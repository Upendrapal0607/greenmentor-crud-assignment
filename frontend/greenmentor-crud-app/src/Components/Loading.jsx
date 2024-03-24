import React from "react";
import styled from "styled-components";

export const Loading = () => {
  return (
    <DIV>
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    </DIV>
  );
};
const DIV = styled.div`
  .loader {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 8px solid #cae0f1;

    border-top: 8px solid #0485da;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
