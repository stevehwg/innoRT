import React, { Component } from 'react';
import '../stylesheets/Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div id={"footer"}><div><span>Copyright © Innovid Inc. All Rights Reserved</span><span style={{borderLeft: 'solid 1px'}}>For Internal Use Only</span></div></div>
        );
    }
}

export default Footer;
