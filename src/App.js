import React, {Component} from "react";
import MainPage from "./pages/MainPage/MainPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles.css'
import LandingPage from "./pages/LandingPage/LandingPage";

class App extends Component {
    render() {
        return (
            <div className="App">

                <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<LandingPage></LandingPage>}></Route>
                    <Route path = '/home' element = {<MainPage></MainPage>}></Route>
                </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;