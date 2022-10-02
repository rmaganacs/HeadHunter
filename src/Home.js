import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import MapPage from "./pages/Maps";
function Home() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <CharacterPage/>
                    </Route>  
                    <Route path="/Maps">
                        <MapPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default Home;