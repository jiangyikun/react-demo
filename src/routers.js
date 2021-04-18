import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TextA from "./components/text_a";
import TextB from "./components/text_b";
import Index from "./components/index";

const Routers = () => {
    return <Router>
        <Route path='/' component={Index}/>
        <Route path='/text/text_a' component={TextA} />
        <Route path='/text/text_b' component={TextB} />
    </Router>
}
export default Routers