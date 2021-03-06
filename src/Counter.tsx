import React from "react";
import './App.css';

type PropsType = {
    digit: number
}

export function Counter(props: PropsType) {
    return (
        <div className={props.digit === 5 ? "counter-stop" : "counter"}>
            {props.digit}
        </div>
    )
}