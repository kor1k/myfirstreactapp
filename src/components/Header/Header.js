import React, {Component} from 'react';

class Header extends Component {
    render() {
        const {name, age} = this.props;
        console.log('Header', this);
        return (
            <div>
                <h1>Privet, {name}</h1>
                <h2>Your age is: {age} </h2>

                {/*<h2>You are in: {city} </h2>*/}
            </div>
        )
    }
}

export default Header