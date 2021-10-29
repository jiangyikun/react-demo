import React, { useState, useCallback } from "react";
import { Input } from "antd";

const Debounce = () => {
    const [debounceTimer, setDebounceTime] = useState(null);
    const [canRun, setCanRun] = useState(true);
    const [throttleTimer, setThrottleTimer] = useState(null);

    useCallback(()=>{
        return ()=>{
            clearTimeout(debounceTimer);
            clearTimeout(throttleTimer);
        }
    });

    const inputChange = (value) => {
        window.console.log(value);
    };
    const debounce = (fn, sm = 500, e) => {
        let value = e.target.value;
        clearTimeout(debounceTimer);
        let timerFn = setTimeout(() => {
            fn(value);
        }, sm);
        setDebounceTime(timerFn);
    }
    const throttle = (fn, sm = 500, e) => {
        if (!canRun) return;
        let value = e.target.value;
        setCanRun(false);
        let timerFn = setTimeout(() => {
            fn(value);
            setCanRun(true);
        }, sm);
        setThrottleTimer(timerFn);
    }
    return <div>
        <p>防抖</p>
        <Input onChange={debounce.bind(this, inputChange, 600)} placeholder='请输入搜索内容' style={{ width: 200 }} />
        <p>节流</p>
        <Input onChange={throttle.bind(this, inputChange, 1000)} placeholder='请输入搜索内容' style={{ width: 200 }} />
    </div>
};

export default Debounce;