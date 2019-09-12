import React from 'react';

class SuccessAlert extends React.Component {

    close = () => {
        this.props.close();
    }

    render() {

        const data = this.props.data;

        let title = "";
        let content = "";
        let show = false;

        if (data) {
            title = data.title;
            content = data.content;
            show = data.show
        }

        return (
            <article>
                {show ?
                    <section className="shadow">
                    <section className="alert-wrapper">
                        <section className="alert-header">
                            <img alt="success" src={process.env.PUBLIC_URL + '/images/success.png'} /> 
                            <h3>{title}</h3>
                        </section>
                        <section className="alert-content">
                            {content}
                        </section>
                        <p onClick={this.close} className="alert-okay">
                            Okay
                        </p>
                    </section>
                </section>
                : null
                }
            </article>
        )
    }
}

export default SuccessAlert;