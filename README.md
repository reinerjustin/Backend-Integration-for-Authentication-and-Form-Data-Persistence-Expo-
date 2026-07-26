# Backend Integration for Authentication & Form Data Persistence (Expo) 

## Submitted by:
Marc Edison Estaca <br>
Reiner Justin Realica <br>
Joshua Dyck <br>

## Assignment Overview 

In this assignment, you will connect the forms developed in Assignment 3 to a backend service. Your implementation must support authentication (sign-up and sign-in) and must allow storing and retrieving user-submitted form data from the backend. Backend services are required for this assignment. 
 
This assignment is intentionally designed to reflect real-world application development, where forms are validated on the client, persisted on the server, and protected behind authentication. 

## Learning Outcomes 

Upon successful completion of this assignment, students will be able to: <br>
• Integrate a mobile application with a backend authentication service  <br>
• Persist and retrieve structured data from a backend database  <br>
• Implement protected screens/routes that require authentication  <br>
• Handle API/network errors, loading states, and user feedback professionally  <br>
• Apply secure configuration practices (environment variables, secrets management)  <br>

## Backend of Choice:
Firebase
 
## Setup on How to run the app
1. Create a folder and name it whatever you want
2. Open a terminal and run
```
git clone https://github.com/reinerjustin/Backend-Integration-for-Authentication-and-Form-Data-Persistence-Expo-.git
```
3. Go to "Backend-Integration-for-Authentication-and-Form-Data-Persistence-Expo-" folder and run
```
npm install
```
4. paste the .env file that is provided (make sure that it is correctly named as .env)
5. run
```
npx expo start
```
## CRUD checklist
- Create — submit employee form <br>
- Read — employee list + details screen <br>
- Update — edit from list <br>
- Delete — with confirmation modal
