
const userInfoForm = document.getElementById('myinfoForm');

userInfoForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const username = document.getElementById('username').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const degree = document.getElementById('degree').value;
  const degreeDuration = document.getElementById('degreeDuration').value;
  const semester = document.getElementById('semester').value;

//   clearErrorMessages();

  if (validateForm(fullName, username, phone, email, password)) {
    submitForm(fullName, username, phone, email, password,degree,degreeDuration,semester);
  }
});

function validateForm(fullName, username, phone, email, password) {

   let isValid = true;
  // Validate Full Name (minimum length of 3 characters)
  if (fullName.length < 3) {
    alert("Full Name must be at least 3 characters long");
    return false;
  }

  // Validate Username (minimum length of 3 characters)
  if (username.length < 3 ) {
    alert("Username must be at least 3 characters long");
    return false;
  }
  else if (username.includes(" ")) {
      alert("Username cannot contain spaces");
      return;
    }
  else  if (!isAlphabets(username)) {
        alert('Username should contain only alphabets.');
        return false;
    }
  // Validate Phone (numeric value with 10 digits)
  var phoneRegex = /^[0-9]{11}$/;
  if (!phone.match(phoneRegex)) {
    alert("Phone number must be a 10-digit numeric value");
    return false;
  }

  // Validate Password (minimum length of 6 characters)
  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  // Validate Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Invalid Email address");
    return false;
  }

  return true; // All validations passed
}

function isAlphabets(value) {
    // Regular expression to check if the value contains only alphabets
    const alphabetsRegex = /^[a-zA-Z]+$/;
    return alphabetsRegex.test(value);
  }
  
  
function submitForm(fullName, username, phone, email, password,degree,degreeDuration,semester) {
  // Perform form submission logic
  // You can use AJAX or send the data to a server
  console.log('Form submitted');
  console.log('Full Name:', fullName);
  console.log('Username:', username);
  console.log('Phone:', phone);
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('degree:',degree);
  console.log('degreeDuration:',degreeDuration);
  console.log('semester:',semester);
  // Clear form inputs
  userInfoForm.reset();
}

var degreeDurationOptions = {
  bachelor: [2, 4],
  master: [2,4],
  phd: [4, 5, 6]
};

var semesterOptions = {
  4: ["Semester 1", "Semester 2", "Semester 3", "Semester 4","Semester 5","Semester 6","Semester 7","Semester 8"],
  2: ["Semester 1", "Semester 2","Semester 3", "Semester 4"],
  5: ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5","Semester 6","Semester 7","Semester 8","Semester 9","Semester 10"],
  6: ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6","Semester 7","Semester 8","Semester 9","Semester 10","Semester 11","Semester 12"]
};

function populateDegreeDuration() {
  var degree = document.getElementById("degree").value;
  var degreeDurationSelect = document.getElementById("degreeDuration");

  degreeDurationSelect.innerHTML = '<option value="" selected disabled>Select Degree Duration</option>';

  if (degree !== "") {
    var degreeDurations = degreeDurationOptions[degree];
    degreeDurations.forEach(function(duration) {
      var option = document.createElement("option");
      option.text = duration + " years";
      option.value = duration;
      degreeDurationSelect.appendChild(option);
    });

    degreeDurationSelect.disabled = false;
  } else {
    degreeDurationSelect.disabled = true;
    document.getElementById("semester").disabled = true;
  }
}

function populateSemester() {
  var degreeDuration = parseInt(document.getElementById("degreeDuration").value);
  var semesterSelect = document.getElementById("semester");

  semesterSelect.innerHTML = '<option value="" selected disabled>Select Semester</option>';

  if (!isNaN(degreeDuration)) {
    var semesters = semesterOptions[degreeDuration];
    semesters.forEach(function(semester) {
      var option = document.createElement("option");
      option.text = semester;
      option.value = semester;
      semesterSelect.appendChild(option);
    });

    semesterSelect.disabled = false;
  } else {
    semesterSelect.disabled = true;
  }
}
