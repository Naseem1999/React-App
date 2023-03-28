import React ,{useState} from 'react'


export default function Textform(props) {
  const [text,setText]=useState('Enter Text here');
  const handleupclick=()=>{
  let newtext=text.toUpperCase();
  setText(newtext);
  props.showalert("Converted to uppercase","success");
  }
  const handleLOWclick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("Convertwd tolowerCase","success");
  }
  const cleartext=()=>{
    let newtext='';
    setText(newtext);
    props.showalert("Text has been deleted","success");
  }
  const copytext=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text copied!","success");

  }
  const removeExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra spaces has been removed","success")
  }
  // const handleonchange=(e)=>{
   
  //  setText(e.target.value);
  // }

  return (

    <div className='container '  style={{color :props.mode==='dark' ? 'white' : '#042743'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={(e)=>{setText(e.target.value)}} style={{backgroundColor :props.mode==='dark' ? '#13466e' : 'white' ,color :props.mode==='dark' ? 'white' : '#042743'}}  id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={handleupclick}>Convert to UpperCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={handleLOWclick}>Convert to Lowercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={cleartext}>Clear Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={copytext}>Copy Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-3 my-2' onClick={removeExtraSpaces}>Remove Spaces</button>
<div className="container">
  <h1>Your text summary</h1>
  <p>{ text.split(" ").filter((element)=>{ return element.length!==0 }).length} words and {text.length} characters</p>
  <p>{0.08 * text.split(" ").filter((element)=>{ return element.length!==0 }).length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0 ?text :'Nothing  to preview'}</p>

</div>
    </div>
  )
}

