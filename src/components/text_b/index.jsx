import React from "react";
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import GridStackItem from "./gristack_item";

class App extends React.Component {
    state = {
        count: 0,
        info: "",
        items: [
            {
                name: 'item1',
                option: { x: 2, y: 1, h: 2, w: 3, id: 1 },
            },
            {
                name: 'item2',
                option: { x: 2, y: 4, h: 4, w: 3, id: 2 },
            },
            {
                name: 'item3',
                option: { x: 4, y: 2, h: 2, w: 3, id: 3 },
            },
            {
                name: 'item4',
                option: { x: 3, y: 1, h: 2, w: 5, id: 4 },
            },
            {
                name: 'item5',
                option: { x: 0, y: 6, w: 2, h: 2, id: 5 },
            }
        ],
    };
    componentDidMount() {
        // Provides access to the GridStack instance across the React component.
        this.grid = GridStack.init({
            float: true,
            cellHeight: "70px",
            minRow: 1,
            column:12,
            verticalMargin: '10px',
        });

        // this.grid.on("dragstop", (event, element) => {
        //     const node = element.gridstackNode;
        //     this.setState({
        //         info: `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`,
        //     });

        //     // Clear the info text after a two second timeout.
        //     // Clears previous timeout first.
        //     window.clearTimeout(this.timerId);
        //     this.timerId = window.setTimeout(() => {
        //         this.setState({
        //             info: "",
        //         });
        //     }, 2000);
        // });
    }

    addNewWidget = (node) => {
        let grid = this.grid;
        if(grid){
            this.grid.addWidget(node);
        }
    };
    render() {
        const { items } = this.state;
        return (
            <div>
                <button type="button" onClick={this.addNewWidget}>
                    Add Widget
                </button>
                {this.state.info}
                <div className="grid-stack">
                    {
                        items.map(item => {
                            return <GridStackItem options={item.option} key={item.option.id} parentContainer={this.griStackInc} addNewWidget={this.addNewWidget}>
                                <div>{item.name}</div>
                            </GridStackItem>
                        })
                    }
                </div>
            </div>
        );
    }
}
export default App