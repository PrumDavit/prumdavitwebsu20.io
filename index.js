document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bootstrap-form");
  const successMessage = document.getElementById("success-message");
  const nameOutput = document.getElementById("name-output");
  const emailOutput = document.getElementById("email-output");
  const salaryOutput = document.getElementById("salary-output");
  const dateOutput = document.getElementById("date-output");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const salary = document.getElementById("salary").value;
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(salary);
    const hireDate = document.getElementById("hire-date").value;

    alert(
      "1.EmpName : " +
        name +
        "\n" +
        "2.Email : " +
        email +
        "\n" +
        "3.salary : " +
        formatted +
        "\n" +
        "4.HireDate : " +
        hireDate +
        "\n"
    );
    // Check if success message exists, if not create one
    let alertContainer = document.getElementById("success-message");
    if (!alertContainer) {
      alertContainer = document.createElement("div");
      alertContainer.id = "success-message";
      alertContainer.className =
        "alert alert-success alert-dismissible fade show";
      alertContainer.role = "alert";
      alertContainer.innerHTML = `
        <strong>Form Submitted!</strong><br>
        <strong>Name:</strong> <span id="name-output"></span><br>
        <strong>Email:</strong> <span id="email-output"></span><br>
        <strong>Salary:</strong> <span id="salary-output"></span><br>
        <strong>Hire Date:</strong> <span id="date-output"></span>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
      document.querySelector(".card-body").prepend(alertContainer);
    }
    // Update success message content
    document.getElementById("name-output").textContent = name;
    document.getElementById("email-output").textContent = email;
    document.getElementById("salary-output").textContent = formatted;
    document.getElementById("date-output").textContent = hireDate;

    alertContainer.classList.remove("d-none");
  });

  form.addEventListener("reset", function () {
    let alertContainer = document.getElementById("success-message");
    if (alertContainer) {
      alertContainer.classList.add("d-none");
    }
  });
});