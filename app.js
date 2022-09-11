fetch('http://www.boredapi.com/api/activity/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
