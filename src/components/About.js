// import React, {useState} from "react";

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    // const [buttonText, setButtonText] = useState("Enable Dark Mode");

    // const handleDarkMode = () => {
    //     if(myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         });
    //         setButtonText("Enable Light Mode");
    //     } else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         });
    //         setButtonText("Enable Dark Mode");
    //     }
    // }

    return (
        <div className="contianer">
            <h1 className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className={`accordion-item bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong>Analyze youre text</strong></button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><strong>Free to use</strong></button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><strong>Browser compatible</strong></button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className={`accordion-body text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button className="btn btn-primary" onClick={handleDarkMode}>{buttonText}</button>
            </div> */}
        </div>
    )
}