const getProtectedResource = async () => {
    const token = sessionStorage.getItem('token');
  
    const response = await fetch('http://localhost:3000/protected', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` },
    });
  
    if (response.ok) {
      const data = await response.json();
      document.getElementById('resource-result').textContent = JSON.stringify(data, null, 2);
    } else {
      alert('Acceso denegado al recurso protegido');
    }
  };
  
  document.getElementById('get-protected-btn').addEventListener('click', getProtectedResource);
  