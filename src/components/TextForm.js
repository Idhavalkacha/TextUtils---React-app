import React, {useState} from "react";
import WordCounter from "./WordCounter";

// useState is hook, importing it from react.
// bleow code text is variable whose default value is Enter text here.
// setText() is function => i have to update the text variable then i'll be updating it using the setText() function.

export default function TextForm(props) {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!', 'success');
    }
    
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!', 'success');
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleClear = () => {
        setText('');
        props.showAlert('Texts cleared!', 'success');
    }

    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleCopyText = () => {
        // var copyText = document.getElementById("myBox");

        // Select the text field
        // copyText.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices
      
        // Copy the text inside the text field
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert('Copied to clipboard!', 'success');
    }
      

    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state.
    // setText("new text"); //correct way to change the state.

    return (
        <>
            <div className="container">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={props.mode === 'dark' ? {backgroundColor: '#303336', color:'white'} : {backgroundColor: 'white'}} id="myBox" rows="8" onChange={handleOnChange} value={text}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" id="upperCase" onClick={handleUpperCase}>Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" id="lowerCase" onClick={handleLowerCase}>Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" id="lowerCase" onClick={handleClear}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" id="lowerCase" onClick={handleSpeak}>Speak</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" id="lowerCase" onClick={handleCopyText}>Copy</button>
            </div>
            <WordCounter mode={props.mode} text={text}/>
            {/* <div className="container my-3">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text summary</h1>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(/\s+/gi).length - 1} words, {text.length} characters</p>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length > 0 ? 0.008 * text.split(" ").length : 0} Minutes read</p>
                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length > 0 ? text : 'Enter something in textarea to see preview'}</p>
            </div> */}
        </>
    )
}