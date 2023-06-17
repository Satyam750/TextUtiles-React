import React, {useState} from 'react'




export default function TextFrom(props) {
    
    const handleUpClick = () =>{
        // console.log("UpperCase was Clicked " + text);
        let newText = text.toUpperCase()
        setText(newText)

        props.showAlert("Converted to UpperCase!","success")
    }
    const handleDownClick = () =>{
        // console.log("UpperCase was Clicked " + text);
        let newText = text.toLowerCase()
        setText(newText)

        props.showAlert("Converted to LowerCase!","success")
    }
    const clearText =() =>{
        let newText = ''
        setText(newText)

        props.showAlert("Text Cleared!","success")
    }

    const captilalize =() =>{
        let lower = text.toLowerCase()
        let str1 = text.charAt(0)
       let newText = str1.toUpperCase() + lower.slice(1)
       setText(newText)
       
       props.showAlert("Text Capitalized!","success")
    }

    const handlecopy = () =>{
     
      navigator.clipboard.writeText(text)
      props.showAlert("Text Copied to Clipboard!","success")
    }

    const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))

      props.showAlert("Extra Space Removed!","success")
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value)     // text ko create kr wata h

    }
    const [text, setText] = useState("")   // State  

    // text = "new Text " // wrong way to change the state
    // setText("new Text")  // Correct way to change the state
  return (
    
    <> 
    <div className='container' style={{color: props.mode ==='light'?'black':'white'}}>

    
    <h1 className='mb-2'>{props.heading}</h1> 
<div className="my-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'?'white':'#3c4cb8', color:props.mode ==='light'?'black':'white',resize:'none'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length === 0} className='btn btn-primary my-2 my-2' onClick={handleUpClick}> Convert to UpperCase</button>
<button disabled={text.length === 0} className='btn btn-primary my-2 mx-2 my-2' onClick={handleDownClick}> Convert to LowerCase</button>
<button disabled={text.length === 0} className='btn btn-primary my-2 mx-2 my-2' onClick={clearText}> Clear Text</button>   
<button disabled={text.length === 0} className='btn btn-primary my-2 mx-2 my-2' onClick={captilalize}> Captilalize</button>
<button disabled={text.length === 0} className='btn btn-primary my-2 mx-2 my-2' onClick={handlecopy}>Copy Text </button> 
<button disabled={text.length === 0} className='btn btn-primary my-2 mx-2 my-2' onClick={handleExtraSpace}>Remove Space </button>   
</div>
      <div className="container my-3" style={{color: props.mode ==='light'?'black':'white'}}>

      {/*  Ye 8th video ka content h --- Adding more Logic to TextUtils -- */}

        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <p> Reading Speed for Normal person -  {0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  )
}
