document.getElementById('get-activity').addEventListener('click', () => {
  fetch("http://www.boredapi.com/api/activity/")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.activity').innerHTML = `<p>${data.activity}</p>`
    });
})
