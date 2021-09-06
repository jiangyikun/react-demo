import React from "react";
import { List } from "react-virtualized";
import 'react-virtualized/styles.css';

export default class Virtualized extends React.PureComponent {
    state = {
        data: [],
        scroll: 0,
        down: 0,
        width: 300,
        height: 500
    }
    componentDidMount() {
        let data = [];
        for (let i = 0; i < 1000; i++) {
            let name = "name" + i;
            data.push({
                id: i,
                name: name,
            });
            this.setState({ data });
        }
    }
    rowRenderer = ({ index, key, isScrolling, style }) => {
        const { data } = this.state;
        return (<div key={key} style={style}>{data[index].name}</div>);
    }
    render() {
        const { data } = this.state;
        return <div>
            <List
                height={500}
                width={300}
                rowHeight={20} // 一列的高度
                rowCount={data.length}  // list总条数
                rowRenderer={this.rowRenderer}
            />
        </div>
    }
}