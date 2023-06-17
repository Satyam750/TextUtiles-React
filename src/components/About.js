// import React,{useState} from 'react'

export default function About(props) {

let myStyle = {
  color:props.mode === 'dark'?'white':'black',
  backgroundColor: props.mode === 'dark'?'#276eef':'white',
  
}






// const blackB = () =>{
//     document.body.style.background = "pink"
// }

// const [myStyle, setmyStyle] = useState({
//     color : 'black',
//     backgroundColor : 'white'
// })

// const [btntext, setbtnText] = useState("Enable Dark Mode");

// const toggleStyle = () =>{
//   if(myStyle.color === 'black'){
//     setmyStyle({
//         color : 'white',
//         backgroundColor : 'black',
//         border:'1px solid'
//     })
//     setbtnText("Enable Light Mode")
//   }else{
//     setmyStyle({
//         color : 'black',
//         backgroundColor : 'white'
//     })
//     setbtnText("Enable Dark Mode")
//   }
// } 
  return (
    <>
    <div className="container" style={myStyle}>
    <h1 className='my-3'style={{ color:props.mode === 'dark'?'white':'black'}}>About Us</h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
      <strong>Analyze Your Text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Textutiles gives you  way to analyze your text quickly and efficiently. be it word count character count or
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        <strong>Free To Use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils is a free character counter tool that provides instant character count and word statistics for a given text. TextUtiles reports the number of words
      and characters. Thus  it is suitable for writing text with word/ character limit.
         </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
       <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
      count characters in facebook, blog, books, excel document, pdf document, essays, etc.
        </div>
    </div>
  </div>
</div>

</div>


    </>
  )
}
