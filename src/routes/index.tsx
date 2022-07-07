import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import MyHardSkillsPage from "../pages/myHardSkills";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/hardskills" exact component={MyHardSkillsPage} />
    </Switch>
  );
};
