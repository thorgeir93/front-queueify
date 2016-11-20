import React from 'react'

class Title extends React.component {
    
    render() {

        var titleStyle = {
            margin: 'auto 0 auto 0' 
        }

        return (
            <h3>{this.props.txt}</h3>
        );
    }
}
