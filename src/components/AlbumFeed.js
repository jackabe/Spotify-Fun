import React from 'react';
import ViewAlbum from './ViewAlbum';
import FeedFilter from './FeedFilter';

class AlbumFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            album: "",
            showAlbum: false,
            sortType: null
        }
    }

    openAlbum = (image) => {
        this.setState({
            album: image,
            showAlbum: true
        })
    }

    closeAlbum = () => {
        this.setState({
            showAlbum: false
        })
    }

    changeSortType = (type, filter) => {
        this.setState({sortType: type});
        const albums = this.props.albums;
        if (filter === 'ascending') {
            // a-z
            if (type === 'name') {
                // artist name
                albums.sort((a, b) => a.artists[0].name.toString().toLowerCase().localeCompare(b.artists[0].name.toString().toLowerCase()))
                albums.reverse();
            }
            else {
                // album name
                albums.sort((a, b) => a.name.toString().toLowerCase().localeCompare(b.name.toString().toLowerCase()))
                albums.reverse();
            }
        }
        else {
            // desc (z-a)
            if (type === 'album') {
                albums.sort((a, b) => a.name.toString().toLowerCase().localeCompare(b.name.toString().toLowerCase()))
            }
            else {
                // artist name
                albums.sort((a, b) => a.artists[0].name.toString().toLowerCase().localeCompare(b.artists[0].name.toString().toLowerCase()))
            }
        }
    }

    next = () => {
        this.props.next(this.props.nextUrl);
    }

    render() {

        let albums = this.props.albums;
        let message = "";
        if (!albums) {
            albums = [];
            message = "Please search to view albums!"
        }
        else if (albums.length === 0) {
            message = "No albums found with that name..."
        }
        
        return (
            <section className="grid">

                {albums && albums.length > 0 ?
                     <FeedFilter setSortType={this.changeSortType}/>: null
                }

                { Object.values(albums).map((album, i) => {
                    const images = album.images;
                    const thumbnail = images[1].url;
                    const image = images[0];
                    const albumName = album.name;
                    const artist = album.artists[0].name;
                    return (
                        <article key={i} onClick={() => this.openAlbum(image)}>
                            <section className="album-cover" style={{backgroundImage: "url(" + thumbnail  + ")"}}></section>
                            <section className="album-details">
                                <p>{albumName} by {artist}</p>
                            </section>
                        </article>
                    )
                })}

                {this.props.nextUrl ?
                       <p onClick={this.next} className="next">Next</p>
                    : null }     

                <p className="no-albums-message">{message}</p>

                {this.state.showAlbum ?
                    <ViewAlbum close={this.closeAlbum} image={this.state.album}/> : null
                }

            </section>  
         )
    }
}

export default AlbumFeed;
