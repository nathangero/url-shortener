# URL Shortener

## Description

<!-- What the project is about. -->

This project is a URL shortener that uses a simple Express.js server and React frontend. The goal was to create this full stack app within a time limit.

## Implementation Details

<!-- Provide a short description of your implementation (technologies used, brief overview of project architecture, etc.) -->

I created this website using Vite with React + TypeScript, Tailwind CSS, and Visual Studio Code.

The project is divided into frontend (directory called `client`) and backend (directory called `server`). The client side has all the react code where a user can enter a url in a form, click the `Shorten` button and shorten the given url on the server side, then send the shortened url back to the client side.

The client side solely shows the user the form and redirects the user to the proper site if there's one found. 

I didn't get to finish the backend, but the backend should receive the URLs from the client, shorten them, and then store the shortened url slugs. The data is stored only while server is active. Once the server is turned off, the data is lost.


## How to Run

<!--
- Include instructions on how to run your implementation locally. Be sure to include any necessary setup steps, such as installing dependencies, as well as the commands to start the application.
-->

1. Download the code.
2. Go to the `client` directory and run `npm i` using your computer's terminal, then `npm run dev` to open up the website. It should open up automatically.
3. Go to the `server` directory and run `npm i` using your computer's terminal, then `npm run dev` to start up the server.
4. Look at your browser and start using the website.

## Testing

<!-- Describe how you tested your solution (automated testing, manual testing process, screenshots, etc.) -->

I did manual testing with each aspect of the project, and I started with the frontend first then the backend. In the frontend, I tested the URL validation in the form, shortening the url, showing the shortened url to the user, and redirecting the user. I did this all in the frontend to make sure I could get the results I wanted before needing to build the server. When it came time to the backend, I tested if my client could talk to the server with a simple `express` `get("/")` call, and then I tested if the redirect would work using dummy data. I didn't get a chance to test the actual shortening of the url on the server side, but that was the next and most likely final step in the server.

## Tools Used

<!--
- Describe any tools you used in developing your solution (e.g. ChatGPT for generating ideas and styles)
- Note: The use of AI tools is not discouraged, but they should be used judiciously.
-->

I used ChatGPT to help check my types and syntax in TypeScript. I don't remember all the types, and using ChatGPT an easy way to get those data types quickly. I also used it for some syntax help with using Tailwind CSS. Sometimes I find it easier to find what I need there because the Tailwind documentation isn't as easy to search sometimes. I did not use it for implementation ideas nor code organization, that was all on my own.
