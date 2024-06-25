# Payem
The Employee Payroll Tracker is a web-based application designed to manage and display employee information, specifically their names and salaries. This application provides functionalities to add new employees, calculate the average salary, and randomly select an employee for a drawing.

Features
Employee Roster Display: Lists the employees' first names, last names, and their respective salaries.
Average Salary Calculation: Computes and displays the average salary of all listed employees.
Random Employee Selection: Randomly selects an employee from the list and announces them as the winner of a drawing.
Screenshot

Components
HTML (index.html)

Contains the structure of the web page including the employee roster table and the button to add employees.
CSS (styles.css)

Provides styling for the employee table and other elements to enhance the visual appearance.
JavaScript (script.js)

Manages the functionalities of adding employees, calculating the average salary, and selecting a random employee for the drawing.
How to Use
View Employee Roster

The main screen displays a table with the current list of employees along with their salaries.
Add Employees

Click on the "Add Employees" button to add new employees to the roster. This will prompt you to enter the first name, last name, and salary for the new employee.
Calculate Average Salary

The average salary of the listed employees is automatically calculated and displayed in the console log.
Random Drawing

A random employee is selected from the roster and announced as the winner in the console log.
Console Output
Displays the average employee salary.
Announces the winner of the random drawing.
Example Console Output
markdown
Copy code
The average employee salary between our 3 employee(s) is $31463.00
========================================
Congratulations to Jeri Gulsby, our random drawing winner!
Installation and Setup
Clone the repository to your local machine.
Open the index.html file in your web browser to view the application.
Use the browser's console to see additional outputs such as the average salary and the random drawing winner.
File Structure
graphql
Copy code
/03-JavaScript-Homework
│── index.html          # Main HTML file
│── styles.css          # CSS file for styling
│── script.js           # JavaScript file for functionality
│── README.md           # This readme file
└── assets
    └── images
        └── 03-javascript-homework-console-demo.png  # Screenshot image
