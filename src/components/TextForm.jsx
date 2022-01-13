import React, {useState} from 'react'

export default function TextForm(props) {
    // const [text,setText]=useState('Enter Text Here');
    const[text, setText]=useState('')
    
    const handleUpClick=()=>{ 
        // console.log("Uppercase was clicked");
        // setText("you have Clicked on handleUpClick");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase','success');
    }
    const handleLowClick=()=>{
        // console.log("Uppercase was clicked");
        // setText("you have Clicked on handleUpClick");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase','success');
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard','success');
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra Space is Removed','success');
    }
        
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    
    return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor : props.mode==='dark' ?'grey' : 'white' , color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className= "btn btn-primary mx-1" onClick={handleCopy}> Copy Text</button>
        <button className= "btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

    </div>
    <div className="container my-3" style={{ backgroundColor : props.mode==='dark' ?'grey' : 'white' , color: props.mode ==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length } words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter Text to preview here"}</p>
    </div>
    </>
  )
}
