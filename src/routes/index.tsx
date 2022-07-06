import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};
