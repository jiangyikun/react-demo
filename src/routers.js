import React from "react";
import { Route } from "react-router-dom";
import TextA from "./components/text_a";
import TextB from "./components/text_b";
import Index from "./components/index";

const Routers = () => {
    return <div>
        <Route path='/' exact component={Index}/>
        <Route path='/text/text_a' component={TextA} />
        <Route path='/text/text_b' component={TextB} />
    </div>
}
export default Routers