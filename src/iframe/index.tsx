import "@iframe-resizer/child";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
// import { useMeasure } from "./useMeasure";

const Wrapper = styled.div<{ height: number; width: number }>`
  position: fixed;
  bottom: 0;
  right: 0;
  min-height: ${({ height }) => height}px;
  min-width: ${({ width }) => width}px;
  border: 2px solid orange;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const InnerWrapper = styled.div<{ height: number; width: number }>`
  height: ${({ height }) => height}px;
  border: 2px solid purple;
  width: ${({ width }) => width}px;
  transition: all 0.5s ease-in-out;
  transition-delay: 0.1s;
  background-color: blue;
`;

const App = () => {
  const [size, setSize] = useState(500);
  // const ref = useMeasure();

  return (
    <Wrapper data-iframe-size height={size} width={size}>
      <InnerWrapper height={size} width={size}>
        <button onClick={() => setSize(size === 500 ? 200 : 500)}>Toggle</button>
      </InnerWrapper>
    </Wrapper>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
