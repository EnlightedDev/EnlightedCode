import React, { useState } from 'react'
import EditorBox from '../EditorBox/EditorBox'

import './editors.css'
import useLocalStorage from '../../storage/useLocalStorage'

function Editors() {


  const [html, setHtml] = useLocalStorage("html", "")
  const [css, setCss] = useLocalStorage("css", "")
  const [js, setjs] = useLocalStorage("js", "")
  const [updown, setUpDown] = useState(300)
  const [iheight, setIHeight] = useState(270)
  const [buttonText, setButtonText] = useState('Move Up')
  const [htmlfontSize, setHtmlFontSize] = useState(14)
  const [cssfontSize, setCssFontSize] = useState(14)
  const [jsfontSize, setJsFontSize] = useState(14)
  const w = 50;

  const handleUpDown = () => {

    if(updown == 300) {
      setUpDown(40)
    } else {
      setUpDown(300)
    }
    
    if(iheight == 270){
      setIHeight(530)
    }
    else {
      setIHeight(270)
    }

    if(buttonText == 'Move Up') {
      setButtonText('Move Down')
    } else {
      setButtonText('Move Up')
    }
    

  }


const handleFontUp = (name) => {
  if(name == "html"){
    if(htmlfontSize>1 && htmlfontSize<31){
    setHtmlFontSize(htmlfontSize+2)
    }
  } else if(name == "css") {
    if(cssfontSize>1 && cssfontSize<31){
      setCssFontSize(cssfontSize+2)
      }
    } else {
      if(jsfontSize>1 && jsfontSize<31){
        setJsFontSize(jsfontSize+2)
        }
    }
  } 

const handleFontDown = (name) => {

    if(name == "html"){
      if(htmlfontSize>2 && htmlfontSize<33){
        setHtmlFontSize(htmlfontSize-2)
        }
      } else if(name == "css") {
      if(cssfontSize>2 && cssfontSize<33){
        setCssFontSize(cssfontSize-2)
        }
      } else {
        if(jsfontSize>2 && jsfontSize<33){
          setJsFontSize(jsfontSize-2)
          }
      }

  }


  const code = `<html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
                </html>`

  const htmlText = "</> HTML"
  const cssText = "{ } CSS"
  const jsText = "( ) JS"

  return (
    <div className='mainEditors'>   
        <div className="break">
          
            <div className="htmlOptions">
            <span class="badge text-bg-danger">{htmlText}</span>
              <div class="btn-group bbb" role="group">
              <button  type="button" class="btn btn-primary editoroptions" onClick={() => handleFontUp("html")} >+</button>
              <button type="button" class="btn btn-primary editoroptions" disabled>{`Font (${htmlfontSize}px)`}</button>
              <button type="button" class="btn btn-primary editoroptions" onClick={() => handleFontDown("html")} >-</button>
              </div>
            </div>
            <div className="cssOptions">
            <span class="badge text-bg-success">{cssText}</span>
              <div class="btn-group bbb" role="group">
              <button  type="button" class="btn btn-primary editoroptions" onClick={() => handleFontUp("css")} >+</button>
              <button type="button" class="btn btn-primary editoroptions" disabled>{`Font (${cssfontSize}px)`}</button>
              <button type="button" class="btn btn-primary editoroptions" onClick={() => handleFontDown("css")}>-</button>
              </div>
            </div>
            <div className="JsOptions">
            <span class="badge text-bg-warning">{jsText}</span>
              <div class="btn-group bbb" role="group">
              <button  type="button" class="btn btn-primary editoroptions" onClick={() => handleFontUp("js")} >+</button>
              <button type="button" class="btn btn-primary editoroptions" disabled>{`Font (${jsfontSize}px)`}</button>
              <button type="button" class="btn btn-primary editoroptions" onClick={() => handleFontDown("js")} >-</button>
              </div>
            </div>
        </div>
        <div className='editors'>
            <div className="bar"></div>
            <EditorBox 
            language = "html"
            displayLanguage = "HTML"
            textInBox = {html}
            onChange = {setHtml}
            upDown = {updown}
            setWidth = {w}
            fontSize = {htmlfontSize}
            className = "box"
            />
            <div className="bar"></div>
            <EditorBox 
            language = "css"
            className = "box"
            textInBox = {css}
            onChange = {setCss}
            upDown = {updown}
            fontSize = {cssfontSize}
            displayLanguage = "CSS"
            />
            <div className="bar"></div>
            <EditorBox 
            language = "javascript"
            className = "box"
            textInBox = {js}
            onChange = {setjs}
            upDown = {updown}
            fontSize = {jsfontSize}
            displayLanguage = "JS"
            />
            <div className="bar"></div>
        </div>
        <div className="break">

          <button type="button" class="btn btn-danger editoroptions" onClick={handleUpDown}>{buttonText}</button>
          
          
          
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

