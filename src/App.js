import Subtitles from "./Components/Subtitles";

import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./Components/Home";

// style

import GlobalStyle from "./theme/GlobalStyle";

function App() {
  const location = useLocation();
  return (
    <>
      <Switch location={location} key={location.key}>
        <Route path="conte">
          <Subtitles />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
