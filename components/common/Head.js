import React from 'react'

export default class Head extends React.component {
    render() {
        return (
            <head>
                <title>{this.props.title}</title> 
            </head>
        );
    }
}
