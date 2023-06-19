firstEntry = 0;

//create an alert message
let message1 = "Jason's";
let message2 = "website!";

//create an const for the message.
const message = `Welcome to ${message1} ${message2}`;

//create the output for the message using both console.log and alert.
if (firstEntry != 0){
    alert(message);
    console.log(message);
    firstEntry = 1;
}

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})