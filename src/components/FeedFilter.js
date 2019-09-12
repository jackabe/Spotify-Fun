import React from 'react';

class FeedFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameSortType: "",
            albumSortType: ""
        }
    }


    handleNameFilterSwitch = (event) => {
        this.setState({nameSortType: event.target.value});
        this.props.setSortType("name", event.target.value);
    };

    handleAlbumFilterSwitch = (event) => {
        this.setState({albumSortType: event.target.value});
        this.props.setSortType("album", event.target.value);
    };

    render() {

        return (
            <section className="filter">
               <nav>
                    <p>Sort by artist name</p>
                    <select value={this.state.nameSortType} onChange={this.handleNameFilterSwitch}>
                        <option value="-">-</option>
                        <option value="descending">A-Z</option>
                        <option value="ascending">Z-A</option>
                    </select>
               </nav>
               <nav>
                    <p>Sort by album</p>
                    <select value={this.state.albumSortType} onChange={this.handleAlbumFilterSwitch}>
                        <option value="-">-</option>
                        <option value="descending">A-Z</option>
                        <option value="ascending">Z-A</option>
                    </select>
               </nav>
            </section>
        )
    }
}

export default FeedFilter;
