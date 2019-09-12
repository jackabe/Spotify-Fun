import React from 'react';
import './App.css';
import Header from './components/Header';
import AlbumFeed from './components/AlbumFeed';
import clientAuthenticate from './api/Authenticate';
import Loading from './components/info/Loading';
import ErrorAlert from './components/info/ErrorAlert';
import searchForAlbumns from "./api/SearchAlbums";
import nextSearchForAlbums from './api/SearchNextAlbums';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        accessToken: null,
        loading: true
      }
  }

  componentDidMount() {
    clientAuthenticate()
    .then((response) => {
        this.setState({
          accessToken: response.access_token,
          loading: false,
        })
    })
    .catch((error) => {
        console.log(error);
        this.setState({
          loading: false,
          errorMessage: {
              show: true,
              title: "Could not load Jackify",
              content: <p>Could not verify user</p>
          }
        })
    })
  }


  closeErrorMessage = () => {
    this.setState({
      errorMessage: {
          show: false,
      }
    })
  }

  onSearchInputChange = (event) => {
    const token = this.state.accessToken;
    searchForAlbumns(token, event.target.value)
    .then((response) => {
      this.setState({
        albums: response.albums.items,
        next: response.albums.next
      })
    })
    .catch((error) => {
        console.log(error)
        this.setState({
          loading: false,
          errorMessage: {
              show: true,
              title: "Could not find albums",
              content: <p>Error loading albums</p>
          }
        })
    })
  }

  next = (next) => {
    const token = this.state.accessToken;
    nextSearchForAlbums(token, next)
    .then((response) => {
      this.setState({
        albums: response.albums.items,
        next: response.albums.next
      })
    })
    .catch((error) => {
        console.log(error)
        this.setState({
          loading: false,
          errorMessage: {
              show: true,
              title: "Could not load next albums",
              content: <p>Error fetching the next albums</p>
          }
        })
    })
  }

  render() {
      return (
        <section className="main">
            <Loading show={this.state.loading}/>
                  
            <ErrorAlert
                close={this.closeErrorMessage}
                data={this.state.errorMessage}
            />

            <Header handleChange={this.onSearchInputChange} token={this.state.accessToken}/>

            <AlbumFeed next={this.next} nextUrl={this.state.next} albums={this.state.albums}/>
        </section>
      )
  }
}

export default App;