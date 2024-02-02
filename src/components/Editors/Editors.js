import React from 'react'
import EditorBox from '../EditorBox/EditorBox'

import './editors.css'

function Editors() {
  return (
    <div className='editors'>
        <div className="bar"></div>
        <EditorBox 
        language = "html"
        className = "box"></EditorBox>
        <div className="bar"></div>
        <EditorBox 
        language = "css"
        className = "box"></EditorBox>
        <div className="bar"></div>
        <EditorBox 
        language = "javascript"
        className = "box"></EditorBox>
        <div className="bar"></div>
    </div>
  )
}

export default Editors
