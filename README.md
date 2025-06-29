# @ouroboros/mouth
[![npm version](https://img.shields.io/npm/v/@ouroboros/mouth.svg)](https://www.npmjs.com/package/@ouroboros/mouth) ![Custom License](https://img.shields.io/npm/l/@ouroboros/mouth.svg)

Shared javascript code for interacting with the mouth service created by
Ouroboros Coding Inc.

See [Releases](https://github.com/ouroboroscoding/mouth-js/blob/main/releases.md)
for changes from release to release.

## Installation

Install with npm

```console
foo@bar:~$ npm install @ouroboros/mouth
```

## RESTlike Documentation
If you're here to connect to a backend using [mouth2_oc](https://pypi.org/project/mouth2_oc/)
and you're already familiar with how to connect to [body_oc](https://pypi.org/project/body_oc/),
services in JS/TS projects, then you're probably just looking for the request
docs. See the [full documentation](https://github.com/ouroboroscoding/mouth2/blob/main/rest.md)
on the individual RESTlike requests in mouth and what they return.

## React + Material UI
If you're connecting to mouth via a [React](https://react.dev/) / MUI framework,
you might want to checkout
[@ouroboros/mouth-mui](https://www.npmjs.com/package/@ouroboros/mouth-mui)
which provides several Components for creating Locales and Templates.

## Using mouth
Mouth uses [@ouroboros/body](https://www.npmjs.com/package/@ouroboros/body) and
relies on [@ouroboros/brain](https://www.npmjs.com/package/@ouroboros/brain) for
sign in / session access, so some small setup is required for mouth to work as
expected.

```javascript
import body from '@ouroboros/body';
import { errors } from '@ouroboros/brain';

// Set the domain for all requests
body.domain('https://rest.mydomain.com');

// Do we have a session?
const session = localStorage.getItem('session');
if(session) {
  body.session(session);
}

// Sign in
body.create('brain', 'signin', {
  email: 'me@mydomain.com',
  passwd: '********'
}).then(data => {

  // Did we get something back?
  if(data) {
    
    // Store session so we can use it on a reload
    localStorage.setItem('session', data.session);

    // Let body know we have a session
    body.session(data.session);

    // Get user
    body.read('brain', 'user').then(storeUser, handleError);
  }
}, error => {
  if(error.code === errors.SIGNIN_FAILED) {
    // notify failed signin
  } else if(error.code === errors.BAD_PORTAL) {
    // notify no access to portal
  } else {
    // notify.... uh oh
  }
});
```

Now that we have connected to the REST services, and signed in to get a user, we
can make requests to the Mouth service

```javascript
import mouth, { errors } from '@ouroboros/mouth';

const locale = {
	_id: 'en-UK',
	name: 'English / United Kingdom'
};
mouth.create('locale', locale).then(data => {
	if(data) {
		// Locale en-UK added
	}
}, error => {
	if(error.code === errors.body.DATA_FIELDS) {
		// error.msg is a list of errors related to the data sent
	} else if(error.code === errors.body.DB_DUPLICATE) {
		// en-UK already exists
	} else {
		// handle other error, check docs
	}
});
```

## Errors
Mouth provides several error codes unique to the [mouth2_oc](https://pypi.org/project/mouth2_oc/)
service.

`TEMPLATE_CONTENT_ERROR`, `ATTACHMENT_STRUCTURE`, `ATTACHMENT_DECODE`,
`SMTP_ERROR`

They can be accessed through `errors` from `@ouroboros/mouth`.

```javascript
import { errors } from '@ouroboros/mouth';
console.log(errors.TEMPLATE_CONTENT_ERROR) // prints 1300
```

Additionally, if you need to access lower level [body_oc](https://pypi.org/project/body_oc/)
errors, you can do so via the `body` variable.

```javascript
import { errors } from '@ouroboros/mouth';
console.log(errors.body.DATA_FIELDS) // prints 1001
```