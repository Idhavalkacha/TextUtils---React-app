import React, { useEffect, useState } from "react";

export default function WordCounter(props) {
    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {
        const words = props.text.split(/\s+/).filter((element) => {return element.length!==0}).length; 
        setWordCount(words);
    }, [props.text]);
    

    return (
        <div className="container my-3">
            <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text summary</h1>
            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{wordCount} words, {props.text.length} characters</p>
            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * wordCount} Minutes read</p>
            <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
            <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.text.length > 0 ? props.text : 'Nothing to preview'}</p>
        </div>
    )
}