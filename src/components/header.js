import React from 'react'
import Link from 'gatsby-link'

import logo from './logo.svg';
import logoInactive from './logo-gray.svg';
import community from './community.svg';
import communityShort from './community-short.svg';

class Header extends React.Component {
  constructor() {
    super();

    this.handleResize = this.handleResize.bind(this);
  }

  state = {
    logoActivated: true,
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({logoSmall: window.innerWidth < 960});
  }

  render() {
    return (
      <div
        style={{
          //background: 'rebeccapurple',
          marginBottom: '1.45rem',
        }}
      >
        <div
          className="w-90 pv1 pv3-l"
          style={{
            margin: '0 auto',
            //maxWidth: 960,
            //padding: '1.45rem 1.0875rem',
          }}
        >
          <a
            className="di"
          >
            <img
              className="mb0 mr2"
              src={this.state.logoActivated ? logo : logoInactive}
              height= {!this.state.logoSmall ? "30" : "20"}
              alt="Logo"
            />
            <img
              className="mb0 dn dib-l"
              src={community}
              height="30"
              alt="Community"
            />
            <img
              className="mb0 dib dn-l"
              src={communityShort}
              height= {!this.state.logoSmall ? "30" : "20"}
              alt="Community"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Header
