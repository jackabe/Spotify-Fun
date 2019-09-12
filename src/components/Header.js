import React from 'react';
import SearchBar from './SearchBar';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <header className="top-navigation">
                <h1>JackiFy</h1>
                <SearchBar handleChange={this.props.handleChange}/>
            </header>
        )
    }
}

export default Header;
