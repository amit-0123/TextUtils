import React, { useState } from 'react';


export default function TextFor(props) {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!","success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase!","success");
    };

    // const YOUR_API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
    //    make to work to translate in hindi check for API
    const handleTranslateClick = async () => {
        try {
            const response = await fetch(
                `https://translation.googleapis.com/language/translate/v2?key=d1845658f92b31c64bd94f06f7188c9c`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        q: text,
                        source: 'en', // Source language (English)
                        target: 'hi', // Target language (Hindi)
                    }),
                }
            );
            const data = await response.json();
            setTranslatedText(data.data.translations[0].translatedText);
        } catch (error) {
            console.error('Error translating text:', error);
        }
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!","success");
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                    <button className="btn btn-success my-3 text-uppercase p-2" style={{ backgroundColor: 'green' }} onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-success my-3 mx-2 text-lowercase p-2" style={{ backgroundColor: 'green' }} onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-success my-3 mx-2 p-2" style={{ backgroundColor: 'green' }} onClick={handleTranslateClick}>Translate to Hindi</button>
                    <button className="btn btn-success my-3 mx-2 p-2" style={{ backgroundColor: 'green' }} onClick={handleClearClick}>Clear Text</button>
                    {/* make to work these two button also */}
                    <button className="btn btn-success my-3 mx-2 p-2" style={{ backgroundColor: 'green' }}>Copy Text</button>
                    <button className="btn btn-success my-3 mx-2 p-2" style={{ backgroundColor: 'green' }}>Remove extraSpace</button>

                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Enter text Summary</h2>
                <p>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.replace(/\s/g, '').length} characters (excluding spaces)</p>
                <p>{0.008 * text.trim().split(/\s+/).filter(Boolean).length} Minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length>0 ?text:"Enter the text in the textBox to preview"}</p>
                {translatedText && (
                    <>
                        <h2>Translated Text (Hindi)</h2>
                        <p>{translatedText}</p>
                    </>
                )}
            </div>
        </>
    );
}
