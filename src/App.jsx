import { Route, Switch } from "wouter"
import Homepage from "./pages/Homepage"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import TravelPlanner from "./pages/TravelPlanner"

function App() {

  return (
    <div className="app_container">
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/homepage" component={Homepage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/travelplanner" component={TravelPlanner} />
      </Switch>
    </div>
  )
}

export default App
