import React, { Component } from 'react'
import AceEditor from 'react-ace'
import brace from 'brace';

import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/css';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/twilight';

export class Editors extends Component {
  render() {
    return (
      <div>
        <AceEditor
        mode="html"  
        theme="twilight"
        splits={2}
        orientation="beside"
        editorProps={{ $blockScrolling: true }}
        // onChange={(newHtml) => setHtml(newHtml)}
        // value={html}
        ></AceEditor>
        <AceEditor
        mode="html"  
        theme="twilight"
        splits={2}
        orientation="beside"
        editorProps={{ $blockScrolling: true }}
        // onChange={(newHtml) => setHtml(newHtml)}
        // value={html}
        ></AceEditor>
        <AceEditor
        mode="html"  
        theme="twilight"
        splits={2}
        orientation="beside"
        editorProps={{ $blockScrolling: true }}
        // onChange={(newHtml) => setHtml(newHtml)}
        // value={html}
        ></AceEditor>


      </div>
    )
  }
}

export default Editors
