// Function to calculate the demerit points and display the result in a window prompt
function calculatePoints() {
	// Get the value of the speed input field and convert it to a number
	const speedInput = document.getElementById("speed");
	const speed = Number(speedInput.value);

	// Initialize the demerit points to 0
	let demeritPoints = 0;

	// If the speed is less than 70 km/h, display "Ok"
	if (speed < 70) {
		window.prompt("Result:", "Ok");
	} else {
		// Calculate the number of demerit points based on the speed
		demeritPoints = Math.floor((speed - 70) / 5);

		// If the number of demerit points is greater than 12, display "License suspended"
		if (demeritPoints > 12) {
			window.prompt("Result:", "License suspended");
		} else {
			// Otherwise, display the number of demerit points
			window.prompt("Result:", "Points: " + demeritPoints);
		}
	}
}

// Get a reference to the "Calculate Points" button and add an event listener for when it is clicked
const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculatePoints);
