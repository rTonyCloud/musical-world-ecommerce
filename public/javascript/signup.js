async function signupFormHandler(event) {
  event.preventDefault();

  
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const user_id = document.querySelector('#user_id-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  
  if (user_id && email && password) {
    const response = await fetch('/api/user', {
      method: 'post',
      body: JSON.stringify({
        name,
        email,
        user_id,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    // check the response status
    if (response.ok) {
      console.log('success');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);