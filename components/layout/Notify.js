import React from 'react'

class default Notify extends React.component {

    constructor() {
        super();
    } 

    const types = {
        0: 'info',
        1: 'warning',
        2: 'alert',
        3: 'error'
    }
    
    render() {
        return (
            <div>
                <p>This is a notificaiton!</p>
            </div>
        );
    }
}
