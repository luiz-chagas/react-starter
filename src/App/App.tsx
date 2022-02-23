import { always } from "ramda";

import { Link } from "../Common/Link";
import { AppContainer, AppLogo, Header } from "./components";
import logo from "./logo.svg";

export const App = always(
  <AppContainer>
    <Header>
      <AppLogo src={logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </Header>
  </AppContainer>,
);
