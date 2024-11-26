import React from "react";

import * as Styled from "./styles";

export default function Loader() {
  return (
    <Styled.Loader>
      <Styled.LoaderSpan
        style={{ "--i": 1 } as React.CSSProperties}
      ></Styled.LoaderSpan>
      <Styled.LoaderSpan
        style={{ "--i": 2 } as React.CSSProperties}
      ></Styled.LoaderSpan>
      <Styled.LoaderSpan
        style={{ "--i": 3 } as React.CSSProperties}
      ></Styled.LoaderSpan>
      <Styled.LoaderSpan
        style={{ "--i": 4 } as React.CSSProperties}
      ></Styled.LoaderSpan>
      <Styled.LoaderSpan
        style={{ "--i": 5 } as React.CSSProperties}
      ></Styled.LoaderSpan>
      <Styled.LoaderSpan
        style={{ "--i": 6 } as React.CSSProperties}
      ></Styled.LoaderSpan>
      <Styled.LoaderSpan
        style={{ "--i": 7 } as React.CSSProperties}
      ></Styled.LoaderSpan>
      <Styled.LoaderSVG>
        <filter id="liquid">
          <feGaussianBlur in={"SourceGraphic"} stdDeviation={10} />
          <feColorMatrix
            values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10
          "
          />
        </filter>
      </Styled.LoaderSVG>
    </Styled.Loader>
  );
}
