# Tip-Calculator
Restaurant Tip Calculator App Documentation

Welcome to the Restaurant Tip Calculator app! This documentation provides an overview of the app's functionality, as well as insights into the challenges faced during its development and the valuable lessons learned.

App Overview
The Restaurant Tip Calculator is designed to help you quickly and accurately calculate the total bill, including the tip, and split it among a specified number of people. It offers a user-friendly interface with the following features:

Bill Total Input: Users can enter the total bill amount in dollars.
Tip Percentage Input: Users can specify the tip percentage they want to leave as a whole number (e.g., 10 for 10%).
Number of People: Users can adjust the number of people sharing the bill using the "+" and "-" buttons.
Per Person Total: The app displays the total amount each person should pay.
Reset Button: There is a "Reset" button to clear all inputs and start fresh.


Challenges Faced
Real-Time Calculation: One of the main challenges was implementing real-time calculations as users input the bill total and tip percentage. Initially, the app displayed "Infinity" due to improper handling of user input. The solution was to add input event listeners to the bill total and tip percentage fields to trigger the calculation function as the user types.
Reset Functionality: The "Reset" button was not functioning correctly. After investigation, it was found that the event listener for the reset button was not properly clearing the input fields and resetting the calculated values. The fix involved setting the input fields and calculated values to their initial states.


Lessons Learned
Event Listeners: I learned the importance of properly attaching event listeners to elements, ensuring they trigger the intended actions. Event listeners play a crucial role in responsive user interfaces.
Error Handling: Dealing with edge cases, such as dividing by zero or handling unexpected user inputs, is crucial to prevent issues like "Infinity" values. Implementing error handling can greatly improve the user experience.
Debugging: Debugging skills are essential for identifying and resolving issues in code. By using debugging tools effectively, I was able to pinpoint the problems and apply the necessary fixes.
User-Centered Design: Building a user-friendly interface is essential. Designing an intuitive and responsive app ensures a better user experience and minimizes confusion.
In conclusion, developing the Restaurant Tip Calculator app was a valuable learning experience. Overcoming challenges led to a deeper understanding of JavaScript, event handling, and debugging techniques. These skills will be beneficial for future projects, and the app now provides users with a helpful tool for calculating restaurant bills and tips.
