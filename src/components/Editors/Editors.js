import React, { useState } from 'react'
import EditorBox from '../EditorBox/EditorBox'

import './editors.css'

function Editors() {


  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setjs] = useState("")
  const [updown, setUpDown] = useState(300)
  const [iheight, setIHeight] = useState(300)
  const [buttonText, setButtonText] = useState('Move Up')
  const w = 50;

  const handleUpDown = () => {

    if(updown == 300) {
      setUpDown(40)
    } else {
      setUpDown(300)
    }
    
    if(iheight == 300){
      setIHeight(560)
    }
    else {
      setIHeight(300)
    }

    if(buttonText == 'Move Up') {
      setButtonText('Move Down')
    } else {
      setButtonText('Move Up')
    }
    

  }


  const code = `<html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
                </html>`



  return (
    <div className='mainEditors'>   
        <div className='editors'>
            <div className="bar"></div>
            <EditorBox 
            language = "html"
            displayLanguage = "HTML"
            textInBox = {html}
            onChange = {setHtml}
            upDown = {updown}
            setWidth = {w}
            className = "box"></EditorBox>
            <div className="bar"></div>
            <EditorBox 
            language = "css"
            className = "box"
            textInBox = {css}
            onChange = {setCss}
            upDown = {updown}
            displayLanguage = "CSS"></EditorBox>
            <div className="bar"></div>
            <EditorBox 
            language = "javascript"
            className = "box"
            textInBox = {js}
            onChange = {setjs}
            upDown = {updown}
            displayLanguage = "JS"></EditorBox>
            <div className="bar"></div>
        </div>
        <div className="break">
          <button onClick={handleUpDown} >{buttonText}</button>
        </div>
        <div className='output'>
          <iframe
            title="Embedded HTML"
            width="100%"
            height={`${iheight}px`}
            srcDoc={code}
            sandbox="allow-scripts"
          />
        </div>
    </div> 
  )
}

export default Editors


