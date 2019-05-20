import React, { Component } from 'react';
import '../stylesheets/Header.css';

import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

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
          try {
            let userData = JSON.parse(decodeURIComponent(this.getCookieValue("tempUserData")));

            if (!userData.firstName) {
                userData = {firstName: "User", lastName: "", email: "user@innovid.com"}
            }
            this.setState({
                userData
            })
          }

          catch(err) {
            this.setState({err})
          }

        } else {
            //FAKE DATA FOR TESTING
            this.setState({
                userData: {firstName: "Local User", lastName: "", email: "local@innovid.com"}
            })
        }
    }

    render() {
        console.log(this.props)
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

const mapStateToProps = state => {
  return {
    pools: state.firestore.ordered.pools,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // order by created time in descending order.
    // can add limit to limit the displayed records.
    { collection: 'pools' }
  ])
)(Header);
