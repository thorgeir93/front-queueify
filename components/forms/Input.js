import React from 'react'

export default class Input extends React.Component {
    
    render() {
        var inputStyle = {
            margin: 'auto 0 auto 0',
            maxWidth: 300,
            width: '100%',
            fontSize: 20,
            border: '2px solid red'
        }

        return (
            <div>
                <h3>{this.props.name}</h3>
                <input 
                    style={inputStyle}
                    type='text' 
                    onChange={this.props.update}/>
                <div>{this.props.txt}</div>
            </div>
        );
    }
}
