function savePersonalInfo() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
  
    if (name && age && email) {
      var personalInfo = {
        name: name,
        age: age,
        email: email,
      };
  
      var personalInfoList =
        JSON.parse(localStorage.getItem("personalInfoList")) || [];
  
      personalInfoList.push(personalInfo);
  
      localStorage.setItem("personalInfoList", JSON.stringify(personalInfoList));
  
      displayInformation();
    } else {
      alert("Please enter all information.");
    }
  }
  
  function displayInformation() {
    var personalInfoList =
      JSON.parse(localStorage.getItem("personalInfoList")) || [];
  
    var displayDiv = document.getElementById("displayInfo");
    displayDiv.innerHTML = "<h3>Personal Information:</h3>";
  
    personalInfoList.forEach(function (personalInfo, index) {
      displayDiv.innerHTML +=
        "<p><strong>Person " + (index + 1) + ":</strong></p>";
      displayDiv.innerHTML += "<p>Name: " + personalInfo.name + "</p>";
      displayDiv.innerHTML += "<p>Age: " + personalInfo.age + "</p>";
      displayDiv.innerHTML += "<p>Email: " + personalInfo.email + "</p>";
      displayDiv.innerHTML += "<hr>";
    });
  }
  
  displayInformation();