import React, {Component} from 'react';
// import Header from './components/Header/Header.js'
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";



class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Body/>
                <Footer/>
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*<p>*/}
                        {/*Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    {/*<a*/}
                        {/*className="App-link"*/}
                        {/*href="https://reactjs.org"*/}
                        {/*target="_blank"*/}
                        {/*rel="noopener noreferrer"*/}
                    {/*>*/}
                        {/*Learn React*/}
                    {/*</a>*/}
                {/*</header>*/}
            </div>
        );
    }
}

export default App;
