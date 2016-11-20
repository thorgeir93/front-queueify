import React from 'react';
import Main from './components/layout/Main';
//import Input from './components/forms/Input';

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
                <h2>hi</h2>
                <Main></Main>
            </div>
                //<Main>
                //    <Input
                //        name='Thorgeir'
                //        classname='submit'
                //        txt={this.state.txt} 
                //        update={this.update}/>
                //    <Input
                //        name='Josua'
                //        classname='search'
                //        txt={this.state.txt} 
                //        update={this.update}/>
                //</Main>
        );
    }
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
