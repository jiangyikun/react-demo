import React from "react";
import { Route } from "react-router-dom";
import TextA from "./components/text_a";
import TextB from "./components/text_b";
import Index from "./components/index";
import TextC from "./components/text_c";
import Virtualized from "./components/virtualized";
import Swiper from "./components/swiper";

const Routers = () => {
    return <div style={{ width: '100%' }}>
        <Route path='/' exact component={Index} />
        <Route path='/text/text_chart' component={TextA} />
        <Route path='/text/text_grid_a' component={TextB} />
        <Route path='/text/text_grid_b' component={TextC} />
        <Route path='/text/text_grid_virtualized' component={Virtualized} />
        <Route path='/swiper' component={Swiper} />
    </div>
}
export default Routers