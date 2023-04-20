# User Manager
User Manager is a simple web application built using React and TypeScript. It allows users to view a list of users and select a user to view more details about them.

Installation
To install the application, follow these steps:

Clone the repository using git clone <repo-url>.
Install dependencies by running npm install.
Install json-server globally using npm install -g json-server.
Start the JSON server by running json-server --watch db.json.
Start the application by running npm start.
The application will then be available at http://localhost:3000/.

Usage
Once the application is running, you can view the list of users and their details. You can add a new user by clicking on the "Add User" button and filling in the required details. You can edit or delete an existing user by clicking on the respective buttons next to their name in the list.

Mocked API
The application uses a mocked API to provide data for the user list. The data is stored in the db.json file in the public directory. If you wish to modify the data, you can edit this file.

Improvements
The current version of the application fulfills the basic requirements of the assignment, but there is still room for improvement. Some suggestions for future enhancements include:

Implementing pagination or infinite scrolling for the user list to improve performance.
Allowing users to sort the list of users by different criteria, such as name or date added.
Adding a search feature to allow users to filter the list of users by name or other attributes.
Adding authentication and authorization to restrict access to certain pages or features.
Contributing
If you wish to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch for your changes.
Make your changes and commit them.
Push your branch to your fork.
Create a pull request from your branch to the main repository.
Please ensure that your code follows the existing code style and includes appropriate tests.

License
This project is licensed under the MIT License. See the LICENSE file for details.
