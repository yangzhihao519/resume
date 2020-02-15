import React, { Component} from 'react';
import '../css/Footer.css'

class Footer extends Component{
    render(){
        return  (
            <div className="footer">
                <h4>© 2020 Hand-crafted by <span style={{fontWeight: 700}}>Zhihao Yang</span>.&nbsp; All Rights Reserved.</h4>
            </div>
        );
    }
}

export default Footer;