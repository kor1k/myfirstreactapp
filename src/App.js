import React, {Component} from 'react';
// import Header from './components/Header/Header.js'
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";


class App extends Component {
    state = {
        userName: "Konstantyn",
        userAge: 19,
        // userPlace: 'Kyiv'
    };

    nameChanged (newValue) {
        debugger;
        this.setState({userName: newValue})
    }

    render() {
        // const {userName, userAge} = this.state;
        console.log('App', this);

        return (
            <div className="App">
                <Header name={this.state.userName} age={this.state.userAge}/>
                <button onClick={() => this.setState({userAge: this.state.userAge + 1})}>Increment age</button>


                {/*()=>   ---- стрелочная ф-я ЕС 2015 (learnjavascript.ru)*/}
                <Body nameChanged = {this.nameChanged.bind(this)} />
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
