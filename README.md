## Pizzeria on NextJS

This is my attempts of Pizzeria with React and NextJS.
Why NextJS instead of Typescript?

Well, so I don't have to create a docker container for the database.
I use MongoDB cloud, so wherever you run the app, you will get the data I inserted without having to dump it at all. NextJS provides Server side rendering, which let me retrieve the data and display it using the backend. NextJS allows me to use React functions and use styling from css files flexibly.

## Checklist

What I couldn't do: <br/>
    1. Unit testing <br/>
    2. Prevent the users from ordering from two stores at the same time.<br/>
    3. Edit actions for stores and pizzas in Admin page.<br/>
    4. Micro-services Design Pattern. This project is monolithic.<br/>
    5. Admin actions on creating or deleting a pizza or a store can display the correct data with having to refresh. 

## Getting Started

First, install all the NPM package by running the command (from the root folder):

```bash
npm install
```

Second, run the build command:

```bash
npm run build
```

Finally, run start command:

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



You can access the Admin panel by http://localhost:3000/admin
