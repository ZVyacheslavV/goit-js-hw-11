fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
    console.log('Отримані дані:', data);
  })
  .catch(error => {
    // Error handling
    console.log('Помилка запиту:', error);
  });
