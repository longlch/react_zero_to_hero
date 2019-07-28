import React from 'react';
import logo from "../logo.svg";

const Page1 = ({onRouteChange}) => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button className="disabled">Page1</button>
                <button onClick={()=>onRouteChange('page2')}>Page2</button>
                <button onClick={()=>onRouteChange('page3')}>Page3</button>
            </header>
        </div>
    );
}
export default Page1;