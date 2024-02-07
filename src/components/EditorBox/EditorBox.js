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
        language, displayLanguage, textInBox, onChange, upDown, fontSize
    } = props;
    
    const handleChange = (value) => {

        onChange(value)

    }

    return (
        <div className='editor-Box collapsed'>

            {/* <div className="header">
            <span class="badge text-bg-primary">{displayLanguage}</span>
            </div>  */}

            <AceEditor
                mode=  {language}
                theme="twilight"
                orientation="beside"
                editorProps={{ $blockScrolling: true }}
                value= {textInBox}
                width='32.5vw'
                fontSize={`${fontSize}px`}
                height= {`${upDown}px`}
                className='editor'
                onChange={handleChange}
                
            ></AceEditor>
        </div>
    )
}

export default EditorBox

