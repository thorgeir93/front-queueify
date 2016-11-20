import React from 'react'
import Title from '../common/Title'

class Input extends React.component {
    
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
                <h3>{props.name}</h3>
                <input 
                    style={inputStyle}
                    type='text' 
                    onChange={props.update}/>
                <div>{props.txt}</div>
            </div>
        );
    }
}
