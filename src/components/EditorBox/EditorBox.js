import React from 'react'

import AceEditor from 'react-ace'
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/theme/twilight';

const EditorBox = (props) => {




    return (
        <div>
            <AceEditor
                mode={props.language}  
                theme="twilight"
                orientation="beside"
                editorProps={{ $blockScrolling: true }}
                height='400px'
            ></AceEditor>
        </div>
    )
}

export default EditorBox

