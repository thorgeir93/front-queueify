import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {txt: 'This is the state text!'}

        // this statement must be included in the constructor
        this.update = this.update.bind(this)
    }

    update(e){
        this.setState( {txt: e.target.value} )
    }

    render() {
        return (
            <div>
                <InputField 
                    name='Thorgeir'
                    classname='submit'
                    txt={this.state.txt} 
                    update={this.update}/>
                <InputField 
                    name='Josua'
                    classname='search'
                    txt={this.state.txt} 
                    update={this.update}/>
            </div>
        );
    }
}

const InputField = (props) => {
    const classname = 'input ' + props.classname;
    return (
        <div>
            <h3>{props.name}</h3>
            <input 
                className={classname}
                type='text' 
                onChange={props.update}/>
            <div>{props.txt}</div>
        </div>
    );

}

// Set a default values to a props
App.defaultProps = {
    txt: 'This is the default value!'
}

// restricted rules about props types
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired,
}

export default App
