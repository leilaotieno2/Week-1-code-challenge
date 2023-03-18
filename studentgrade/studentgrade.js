// Getting the calculate button from the DOM
const calculateBtn = document.querySelector('#calculate');

// Adding an event listener to the calculate button
calculateBtn.addEventListener('click', () => {
 
  // Getting the input values from the form

  const name = document.querySelector('#name').value;
  const className = document.querySelector('#class').value;
  const marks = parseInt(document.querySelector('#marks').value);

  // Checking  if the input marks is between 0 and 100
  if (marks < 0 || marks > 100 || isNaN(marks)) {
    window.alert('Invalid input. Please enter a number between 0 and 100.');
  } else {
    // Determine the grade based on the marks
    let grade;
    if (marks >= 80) {
      grade = 'A';
    } else if (marks >= 60) {
      grade = 'B';
    } else if (marks >= 50) {
      grade = 'C';
    } else if (marks >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }

    // Display the grade in a window prompt
    window.alert(`Hi ${name}, your grade for ${className} is ${grade}.`);
  }
});
