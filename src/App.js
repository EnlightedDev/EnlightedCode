import React, {Component} from "react";
import MainPage from "./pages/MainPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles.css'

class App extends Component {
    render() {
        return (
            <div className="App">

                <BrowserRouter>
                <Routes>
                    
                    <Route path = '/' element = {<MainPage></MainPage>}></Route>

                </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;