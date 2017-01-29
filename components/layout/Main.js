import React from 'react';
//import Head from '../common/Head';
import Input from '../forms/Input';
import Login from '../forms/Login';

import { Colors } from '../utils/colors.js'

export default class Main extends React.Component {
    render() {
        
        var body = {
            maxWidth: '300px',
            margin: '0 auto 0 auto',
            backgroundColor:Colors.bgColors.default,
        }

        var mainbg = {
            backgroundColor:Colors.bgColors.default,
        }

        return (
            <div style={body}>
				<Login></Login>
            </div>
        );
    }
}
