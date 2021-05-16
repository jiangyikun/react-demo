import React, { useEffect } from "react";
import * as echarts from 'echarts';

const TextA = () => {

    useEffect(() => {
        let myChart = echarts.init(document.getElementById('myEcharts'));
        let data = [{
            name: 'Grandpa',
            children: [{
                name: 'Uncle Leo',
                value: 15,
                children: [{
                    name: 'Cousin Jack',
                    value: 2
                }, {
                    name: 'Cousin Mary',
                    value: 5,
                    children: [{
                        name: 'Jackson',
                        value: 2
                    }]
                }, {
                    name: 'Cousin Ben',
                    value: 4
                }]
            }, {
                name: 'Father',
                value: 10,
                children: [{
                    name: 'Me',
                    value: 5
                }, {
                    name: 'Brother Peter',
                    value: 1
                }]
            }]
        }, {
            name: 'Nancy',
            children: [{
                name: 'Uncle Nike',
                children: [{
                    name: 'Cousin Betty',
                    value: 1
                }, {
                    name: 'Cousin Jenny',
                    value: 2
                }]
            }]
        }];
        myChart.setOption({
            series: [{
                name: '销量',
                type: 'sunburst',
                label: {
                    show: true,
                    formatter: (params) => {
                        return params.name + ':' + params.value;
                    }
                },
                // nodeClick:false,
                data: data
            }]
        });
    }, []);
    return <div id='myEcharts' style={{ width: 300, height: 300 }}>echarts</div>
};
export default TextA