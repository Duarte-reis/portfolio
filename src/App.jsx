import { Route, Switch } from "wouter"
import Homepage from "./pages/Homepage"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import TravelPlanner from "./pages/TravelPlanner"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <div className="app_container">
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/homepage" component={Homepage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/travelplanner" component={TravelPlanner} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
