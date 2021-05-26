import React from "react";

export default class GristackItem extends React.Component{
    state={
        optionAttr:{},
    }
    componentDidMount(){
        let option = this.props.options;
        if(option){
            let optionsAttr = {};
            Object.keys(option).map(key => {
                let dataKey = "gs-" + key.toString();
                let optionStr = `${dataKey}`;
                optionsAttr[optionStr] = option[key];
            });
            this.setState({optionsAttr});
        }
        
        if(this.props&&this.props.addNewWidget){
            this.props.addNewWidget(this.griStackItemInc);
        }
    }
    render(){
        const {options} = this.props;
        let optionsAttr = {};
        Object.keys(options).map(key => {
            let dataKey = "gs-" + key.toString();
            let optionStr = `${dataKey}`;
            optionsAttr[optionStr] = options[key];
        });
        return <div className='grid-stack-item' style={{border:'1px solid red'}}
            {...optionsAttr}
            ref={inc=>this.griStackItemInc = inc}>
            <div className='grid-stack-item-content'>
                {React.Children.map(this.props.children, (child, i) => {
                    return child;
                })}
            </div>
        </div>
    }
}