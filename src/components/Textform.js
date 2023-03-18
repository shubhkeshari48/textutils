import React,{useState} from 'react'

export default function Textform(props) {
  const [text, settext] = useState("Enter text here");
  const handleUpClick=()=>{
    let newtext=text.toUpperCase();
    settext(newtext);
    
  }
  const handleLoClick=()=>{
    let newtext=text.toLowerCase();
    settext(newtext);
    
  }
  const handleOnChange=(event)=>{
    settext(event.target.value);
  }
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className='my-3'>
        <textarea className='form-control' rows='8'value={text} onChange={handleOnChange}></textarea>
        <button className='btn btn-primary my-2 mx-1'onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary my-2 mx-1'onClick={handleLoClick}>Convert to Lowercase</button>
    
      </div>

    </div>
    <div className='container my-3'>
      <h1>Your Text Summary</h1>
      <p>{text.length} characters and {text.split(' ').length} words</p>
      <p>It will take approx {0.008*text.split(' ').length} minutes to read</p>
      <h3>Preview:</h3>
      <p>{text}</p>
    </div>
    </>
  )
}

