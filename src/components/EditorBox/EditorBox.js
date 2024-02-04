import React from 'react'

import AceEditor from 'react-ace'
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/theme/twilight';

import './editorbox.css'

const EditorBox = (props) => {

    const {
        language, displayLanguage, textInBox, onChange, upDown
    } = props;
    
    const handleChange = (value) => {

        onChange(value)

    }

    return (
        <div className='editor-Box'>

            <div className="header">
                <h2>{displayLanguage}</h2>
                {/* <button>O/C</button> */}
            </div> 

            <AceEditor
                mode=  {language}
                theme="twilight"
                orientation="beside"
                editorProps={{ $blockScrolling: true }}
                value= {textInBox}
                width='32.5vw'
                height= {`${upDown}px`}
                className='editor'
                onChange={handleChange}
            ></AceEditor>
        </div>
    )
}

export default EditorBox

