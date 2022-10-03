handleLogin = (e, config) => {
  e.preventDefault();
  let auth;
  if (document.location.host.split(':')[0] === 'localhost') {
    auth = new Authenticator({ site_id: '{{yoursite}}.netlify.app' });
  } else {
    auth = new Authenticator({ site_id: config.getIn(["backend", "site_id"], null) });
  }
}
