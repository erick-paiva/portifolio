import { Route, Switch } from "react-router-dom";
import Home from "../../page/home/ĩndex";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};
