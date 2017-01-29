import Radium from 'radium'
import React from 'react'
//import color from 'color'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    

    this.style = this.notFocusStyle;

    this.handleChange=this.handleChange.bind(this);
    this.handleFocus=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  getStyles() {
    const borderRad = '0px';
    return {
        input_: {
            WebkitAppearance: 'none',
            WebkitBorderRadius: borderRad,
            MozBorderRadius: borderRad,
            borderRadius: borderRad,
            display: 'block',
            margin: '10px 0 10px 0',
            padding: '5px',
            width: '100%',
            backgroundColor: 'transparent',
            fontSize: '20px',
            color: 'white',
            lineHeight: '50px',
            border: 'none',
            borderBottom: '2px solid #E0E0E0',
            ":focus":{
                outline: 0,
                boxShadow: 'none',
                borderBottom: '2px solid green'
            }
        },
        button_: {
            backgroundColor: 'transparent',
            minHeight: '5rem',
            color: '#E0E0E0',
            border: 0,
            border: '2px solid #E0E0E0',
            width: '100%',
            right: '20px',
            marginTop: '50px',
            opacity: 0.7,
            fontSize: '20px',
            ":hover":{
                opacity: 1.0,
            }
        }
    };
  }

  handleFocus(event) {
    console.log( 'Focus' )
    this.style = this.focusStyle
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    alert('A name was submitted:'+this.state.value);
    event.preventDefault();
  }

  render() {
    const styles = this.getStyles();
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text" 
            key='1'
            placeholder='User name' 
            onChange={this.handleChange} 
                style={styles.input_}/>
          <input 
            type="text"
            placeholder='Password' 
            key='2'
            onChange={this.handleChange} 
            style={styles.input_}/>
        </label>
        <button type="submit" style={styles.button_}>Login</button>
      </form>
    );
  }
}


export default Radium( Login )
//export default Login
