import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Button} from "./Button";

function App() {

    const [digit, setDigit] = useState<number>(0)
    const [disabledInc, setDisabledInc] = useState<boolean>(false)
    const [disabledReset, setDisabledReset] = useState<boolean>(true)

    useEffect(() => {
        let storedValue = Number(localStorage.getItem('counterValue'))
        storedValue && setDigit(storedValue)
        disableButton(storedValue)
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(digit))
    }, [digit])

    function disableButton(digit: number) {
        if (digit === 0) {
            setDisabledInc(false)
            setDisabledReset(true)
        } else if (digit === 5) {
            setDisabledInc(true)
            setDisabledReset(false)
        } else {
            setDisabledInc(false)
            setDisabledReset(false)
        }
    }

    function changeDigit(digit: number) {
        setDigit(digit)
        disableButton(digit)
    }

    return (
        <div className="App3">
            <Counter digit={digit}/>
            <div className="btnBlock">
                <Button title={"inc"} disabled={disabledInc} changeDigit={changeDigit} digit={digit}/>
                <Button title={"reset"} disabled={disabledReset} changeDigit={changeDigit} digit={digit}/>
            </div>
        </div>
    )
}

export default App;