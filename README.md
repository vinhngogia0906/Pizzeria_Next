## Pizzeria on NextJS

This is my attempts of Pizzeria with React and NextJS.
Why NextJS instead of Typescript?

Well, so I don't have to create a docker container for the database.
I use MongoDB cloud, so wherever you run the app, you will get the data I inserted without having to dump it at all. NextJS provides Server side rendering, which let me retrieve the data and display it using the backend. NextJS allows me to use React functions and use styling from css files flexibly.

## Checklist

What I couldn't do: 
    1. Unit testing
    2. Prevent the users from ordering from two stores at the same time.
    3. Edit actions for stores and pizzas in Admin page.
    4. Micro-services Design Pattern. This project is monolithic.
    5. Admin actions on creating or deleting a pizza or a store can display the correct data with having to refresh. 

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.


You can access the Admin panel by http://localhost:3000/admin
