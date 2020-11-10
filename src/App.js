import React from 'react';
import './index.css'
import {BrowserRouter, Route} from 'react-router-dom';

import Main from "./components/Main/Main";
import Game from "./components/Game/Game";

const App = () => (
    <BrowserRouter>
        <Route path='/' exact>
                <Main
                    text="Who want's to be a millionaire?"
                    buttonText='Start'
                />
        </Route>

        <Route path='/game' component={Game} />

    </BrowserRouter>

);


export default App;
