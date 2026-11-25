
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const roll = document.getElementById("roll").value;
    const department = document.getElementById("department").value;

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    const activities = document.querySelectorAll(
        'input[name="activity"]:checked'
    );

    const selectedActivities = [];

    activities.forEach(function(activity) {
        selectedActivities.push(activity.value);
    });

    if (selectedActivities.length === 0) {
        document.getElementById("response").textContent =
            "Please select at least one activity.";
        return;
    }

    const student = {
        name: name,
        email: email,
        roll: roll,
        department: department,
        gender: gender,
        activities: selectedActivities
    };

    console.log("Student Registration:", student);

    document.getElementById("response").textContent =
        "Registration successful! Thank you, " + name + ".";

    form.reset();
});
