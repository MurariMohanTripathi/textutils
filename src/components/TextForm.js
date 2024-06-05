import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick = ()=>{
        // console.log("uppercase is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleClClick = ()=>{
        // console.log("uppercase is clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Textbox is clean now !","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied to Clipboard!","success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed !","success");
    }
    const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode === 'light' ? 'black':'white'}}>  
        <h1>{props.heading}</h1> 
        <div className="mb-3">
        
        <textarea className = "form-control" style={{backgroundColor:props.mode === 'light' ? 'white':'#042743' , color:props.mode === 'light' ? 'black':'white'}} value ={text} id="myBox" rows ="8" onChange ={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'light' ? 'black':'white'}}>
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0 ? text : "enter text in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
