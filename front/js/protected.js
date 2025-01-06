const login = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      const { token } = await response.json();
      sessionStorage.setItem('token', token);  // Es una forma de almacenar datos en el navegador utilizando el objeto sessionStorage.

      alert('Inicio de sesión exitoso. Token almacenado.');
    } else {
      alert('Error de autenticación');
    }
  };
  
  document.getElementById('login-btn').addEventListener('click', login);
  