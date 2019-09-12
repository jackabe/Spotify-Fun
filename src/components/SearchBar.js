import React from 'react';
import { FiSearch } from "react-icons/fi";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    onInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
        this.props.handleChange(event);
    }

    render() {

        return (
            <section className="search-input">
                <FiSearch className="header-icon"/>
                <input placeholder="Search for albums.." value={this.state.value} onChange={this.onInputChange}/>
            </section>
        )
    }
}

export default SearchBar;
