import React from 'react'
import Main from './Main';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import background from './background';
import publications from './publications';
import venoussheathvalve from './venoussheathvalve';
import hemostasisvalve from './hemostasisvalve';
import mountainbike from './mountainbike';
import reloadsystem from './reloadsystem';
import crossoverspeaker from './crossoverspeaker';

function App() {
    return (
            
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/background" component={background} />
                <Route exact path="/publications" component={publications} />
                <Route exact path="/venous-sheath-valve" component={venoussheathvalve} />
                <Route exact path="/hemostasis-valve" component={hemostasisvalve} />
                <Route exact path="/mountain-bike" component={mountainbike} />
                <Route exact path="/reload-system" component={reloadsystem} />
                <Route exact path="/crossover-speaker" component={crossoverspeaker} />
            </Switch>
        </Router>
            
        
    )
}


export default App