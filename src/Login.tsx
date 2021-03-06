import React, {Component} from 'react';
import * as OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

import config from './config';

export default class Login extends Component {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  signIn: any;

  constructor(props: any) {
    super(props);

    const {pkce, issuer, clientId, redirectUri, scopes} = config.oidc;
    this.signIn = new OktaSignIn({
      baseUrl: issuer.split('/oauth2')[0],
      clientId,
      redirectUri,
      logo: '/logo.png',
      i18n: {
        en: {
          'primaryauth.title': 'Setter for Catan',
        },
      },
      authParams: {
        pkce,
        issuer,
        display: 'page',
        scopes,
      },
    });
  }

  componentDidMount() {
    this.signIn.renderEl(
      {el: '#sign-in-widget'},
      () => {},
      (err: any) => {
        throw err;
      }
    );
  }

  componentWillUnmount() {
    this.signIn.remove();
  }

  render() {
    return (
      <div>
        <div id="sign-in-widget" />
      </div>
    );
  }
}
