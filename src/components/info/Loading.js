import React from 'react';
import '../../LoadingStyles.css'

class Loading extends React.Component {

    close = () => {
        this.props.close();
    }

    render() {

        return (
            <article>
                {this.props.show ?
                <div className="shadow">
                    <div className="loading-wrapper">
                        <div className="lds-css ng-scope">
                        <div className="lds-ellipsis">
                            <div>
                            <div>
                            </div>
                            </div>
                            <div>
                            <div>
                            </div>
                            </div>
                            <div>
                            <div></div>
                            </div>
                            <div>
                            <div></div>
                            </div>
                            <div>
                            <div></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                : null
                }
            </article>
        )
    }
}

export default Loading;