const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error('Incorrect password!')
            });
          }
          const token = jwt.sign({
              userId: user._id
            },
            'RANDOM_TOKEN_SECRET', {
              expiresIn: '24h'
            });
          res.status(200).json({
            userId: user._id,
            token: token
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: errorn
          });

          if (email && password) {
            const response = await fetch(`/api/user/login`, {
              method: 'POST',
              body: JSON.stringify({
                email,
                password
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            if (response.ok) {
              document.location.replace('/dashboard');
            } else {
              alert(response.statusText);
            }
          }
        }

        document.querySelector('.login-form').addEventListener('submit', loginFormHandler);