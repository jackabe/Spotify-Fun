import React from 'react';

class ViewAlbum extends React.Component {

    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        this.setState({open: true})
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.close();
        }
    }

    render() {

        return (
            <section className="shadow">
              <article ref={this.setWrapperRef} style={{backgroundImage: "url(" + this.props.image.url  + ")"}} className="album-view">
              </article>
            </section>
        )
    }
}

export default ViewAlbum;
