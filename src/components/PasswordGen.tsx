import React, { useState, useEffect } from 'react'
import { randomsPass } from '../features/RandomsPass';

function PasswordGen() {
    const [length, setLength] = useState(4);
    const [lower, setLower] = useState(true);
    const [upper, setUpper] = useState(false);
    const [numb, setNumb] = useState(false);
    const [special, setSpecial] = useState(false);
    const [password, setPassword] = useState('');
    const [func, setFunc] = useState(Array<number | boolean>);

    const onGenerate = () => {
        setPassword(randomsPass(func));
    }

    const onCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigator.clipboard.writeText(e.currentTarget.value);
        alert('copy password on clipboard');
    }

    useEffect(() => {
        setFunc([length, lower, upper, numb, special]);
    }, [length, lower, upper, numb, special])

    return (
        <div className='container'>
            <h2>Password Generator</h2>
            <div className='text-area-container'>
                <textarea className='password-area' name='password' value={password} disabled />
                {
                    password === '' ? <button className="copy-btn" onClick={() => alert("No password yet")} value={password} >Copy</button>
                    : <button className="copy-btn" onClick={onCopy} value={password}>Copy</button>
                }
                
            </div>

            <div className="checkbox-container">
                <div>
                    <input className='range' type="range" min="4" max="15" onChange={e => setLength(parseInt(e.target.value))} />
                    <label>{length}</label>
                </div>
                <div>
                    <input className='checkbox' type="checkbox" checked onClick={e => setLower(!lower)} onChange={e => {}}/>
                    <label>Include Lower Character</label>
                </div>
                <div>
                    <input className='checkbox' type="checkbox" onClick={e => setUpper(!upper)} />
                    <label>Include Upper Character</label>
                </div>
                <div>
                    <input className='checkbox' type="checkbox" onClick={e => setNumb(!numb)} />
                    <label>Include number</label>
                </div>
                <div>
                    <input className='checkbox' type="checkbox" onClick={e => setSpecial(!special)} />
                    <label>Include Special Character</label>
                </div>

            </div>
            <button className="generate-btn" type="submit" onClick={onGenerate}>Generate</button>
        </div>
    )
}

export default PasswordGen
