import React from "react";
import { GridStack } from "gridstack";
import 'gridstack/dist/gridstack.min.css';
import './style.scss';

export default class TextC extends React.Component {
    state = {
        count: 0,
        info: "",
        items: [
            { x: 2, y: 1, h: 2 },
            { x: 2, y: 4, w: 3 },
            { x: 4, y: 2 },
            { x: 3, y: 1, h: 2 },
            { x: 0, y: 6, w: 2, h: 2 },
        ],
    };
    componentDidMount() {
        this.grid = GridStack.init({
            float: true,
            cellHeight: "70px",
            minRow: 1,
        });

        this.grid.on("dragstop", (event, element) => {
            const node = element.gridstackNode;
            this.setState({
                info: `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`,
            });

            // Clear the info text after a two second timeout.
            // Clears previous timeout first.
            window.clearTimeout(this.timerId);
            this.timerId = window.setTimeout(() => {
                this.setState({
                    info: "",
                });
            }, 2000);
        });
    }
    addNewWidget = () => {
        const node = this.state.items[this.state.count] || {
            x: Math.round(12 * Math.random()),
            y: Math.round(5 * Math.random()),
            w: Math.round(1 + 3 * Math.random()),
            h: Math.round(1 + 3 * Math.random()),
        };
        node.id = node.content = String(this.state.count);
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
        this.grid.addWidget(node);
    };
    render() {
        return (
            <div>
                <h1>How to integrate GridStack.js with React.js</h1>
                <p>
                    As with any virtualDOM-based framework, you need to check if React
              has rendered the DOM (or any updates to it){" "}
                    <strong>before</strong> you initialize GridStack or call its
              methods. As a basic example, check this component's{" "}
                    <code>mounted</code> hook.
            </p>
                <p>
                    If your app requires more complex render logic than the inline
                    template in `addWidget`, consider&nbsp;
              <a href="https://github.com/gridstack/gridstack.js/tree/master/doc#makewidgetel">
                        makeWidget
              </a>
              &nbsp;to let React deal with DOM rendering.
            </p>
                <button type="button" onClick={this.addNewWidget}>
                    Add Widget
            </button>
                {this.state.info}
                <section class="grid-stack"></section>
            </div>
        );
    }
}