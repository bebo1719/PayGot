// Global variable to hold employee data
let employees = [];

// Function to collect employee data
const collectEmployees = function() {
  const numEmployees = parseInt(prompt('How many employees do you want to add?'));

  for (let i = 0; i < numEmployees; i++) {
    const firstName = prompt(`Enter first name for employee ${i + 1}:`);
    const lastName = prompt(`Enter last name for employee ${i + 1}:`);
    const salary = parseFloat(prompt(`Enter salary for employee ${i + 1}:`));

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });
  }

  return employees;
};

// Function to display average salary
const displayAverageSalary = function(employeesArray) {
  const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {style: "currency", currency: "USD"})}`);
};

// Function to select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log('Random Employee:');
  console.log(`Name: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
  console.log(`Salary: ${randomEmployee.salary.toLocaleString("en-US", {style: "currency", currency: "USD"})}`);
};

// Starter code (displayEmployees function is provided)

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  const employeeTable = document.querySelector('#employee-table');
  employeeTable.innerHTML = '';

  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {style: "currency", currency: "USD"});
    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

// Event listener setup (do not modify)
const addEmployeesBtn = document.querySelector('#add-employees-btn');
addEmployeesBtn.addEventListener('click', function() {
  employees = []; // Reset employees array
  collectEmployees();
  displayEmployees(employees);
  displayAverageSalary(employees);
  getRandomEmployee(employees);
});