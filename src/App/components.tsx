import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const AppContainer = styled.div({
  textAlign: "center",
});

export const Header = styled.header({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
});

export const AppLink = styled.a({
  color: "#61dafb",
});

export const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppLogo = styled.img({
  height: "40vmin",
  pointerEvents: "none",
  animation: `${Spin} infinite 20s linear`,
});
