# MentorMenteeMatchTool

### React Components Overview
#### LoginPage Component
The LoginPage component presents a simple and user-friendly interface for logging in. It features a logo, a welcoming header, and two buttons for 'Log In' and 'Sign Up' actions.

#### SignInPage Component
The SignInPage is designed for users to securely sign in to their accounts. It includes fields for 'Email' and 'Password', and a 'Sign In' button. This component can be integrated with authentication services for user verification.

#### SignUpPage Component
The SignUpPage component allows new users to create an account. It has input fields for 'Date of Birth', 'Hometown', 'Email', 'Phone Number', and 'Password' (with confirmation). It also provides an option to upload a profile picture.

#### Navigation
Using React router will help you navigate throuhg the pages, there can also be page navigation implemented with FastAPI.

#### Usage
Components are designed to be easily integrated into a React application. They can be rendered by importing into the main App.js file of a React project. Run `npm start` to run the selected component. Additional tools are listed in the project folder, along with React resources

### FastAPI routes Overview

#### GET Routes (Read)
- Get all users (/users): Retrieves a list of all users registered in the system. Authentication via a web token is required.
- Get specific user (/users/{user_id}): Fetches details of a specific user by their unique identifier. A valid web token must be provided in the header for authentication.
#### POST Routes (Create)
- Login for user (/login): Handles user login, accommodating different user types such as mentor, mentee, and admin. This route is responsible for user authentication and session management.
- Create new meeting (/meetings): Enables the creation of new meetings within the platform. Requires authentication.
- Pairing mentor and mentee (/pairing): Facilitates the pairing of mentors with mentees. A valid web token is required for operation.
- Uploading media (/upload_media): Allows users to upload media files. This route is secured and requires a valid authentication token.
#### PUT Routes (Update)
- Change user information (/users/{user_id}): Provides functionality to update user information, such as email and login credentials. Authentication is mandatory for accessing this route.
- Update meeting date (/meetings/{meeting_id}): Enables updating the scheduled date for an existing meeting. A valid web token is required for this operation.
#### DELETE Routes (Delete)
- Delete user (/users/{user_id}): Allows for the removal of a user from the platform. This action requires user authentication for security reasons.
- Delete meeting (/meetings/{meeting_id}): Provides the ability to delete a scheduled meeting. A web token must be provided for authentication.
- Delete media (/media/{media_id}): Enables users to delete previously uploaded media. This route is secured and requires authentication.
