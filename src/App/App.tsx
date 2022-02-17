import { always } from "ramda";

import { AppContainer, AppLink, AppLogo, Header } from "./components";
import logo from "./logo.svg";

export const App = always(
  <AppContainer>
    <Header>
      <AppLogo src={logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <AppLink
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </AppLink>
    </Header>
  </AppContainer>,
);
