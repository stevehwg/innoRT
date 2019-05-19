import React, { Component } from 'react';
import '../stylesheets/Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {}
        };

        this.getCookieValue = this.getCookieValue.bind(this);
    }

    getCookieValue(a) {
        var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
        return b ? b.pop() : '';
    }

    componentDidMount() {
        if (window.location.hostname !== 'localhost') {
            let userData = JSON.parse(decodeURIComponent(this.getCookieValue("tempUserData")));

            if (!userData.firstName) {
                userData = {firstName: "User", lastName: "", email: "user@innovid.com"}
            }

            this.setState({
                userData
            })
        } else {
            //FAKE DATA FOR TESTING
            this.setState({
                userData: {firstName: "Local User", lastName: "", email: "local@innovid.com"}
            })
        }
    }

    render() {
        return (
            <div className="header">
                <div id={"header-content"}>
                    <div id={"header-logo-text"}>
                        <div id="logo"/>
                        <div id={"header-txt"}>
                            Rotten Tomatoes Pool 2019
                        </div>
                    </div>
                    <div id={"header-user"}>
                        Hey {this.state.userData.firstName}
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;
