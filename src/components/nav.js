import React, { Component } from 'react' 

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="">{ this.props.title }</a>

            </nav>
        )
    }
}

export default Navigation