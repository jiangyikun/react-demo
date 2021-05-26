import React from "react";
import { Route } from "react-router-dom";
import TextA from "./components/text_a";
import TextB from "./components/text_b";
import Index from "./components/index";
import TextC from "./components/text_c";

const Routers = () => {
    return <div style={{width:'100%'}}>
        <Route path='/' exact component={Index}/>
        <Route path='/text/text_a' component={TextA} />
        <Route path='/text/text_b' component={TextB} />
        <Route path='/text/text_c' component={TextC} />
    </div>
}
export default Routers