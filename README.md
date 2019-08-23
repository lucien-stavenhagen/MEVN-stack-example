# MEVN-stack-example
Blog app redone with Vue.js frontend, using same Node/Express backend as the MERN stack example
This is the same basic Posts app that I wrote with React, but this version uses Vue.js for the front end portion. 

Basic fully CRUD enabled app using the MEVN stack:

    MongoDB Atlas
    Mongoose ODM for MongoDB modeling
    Node.js JavaScript runtime
    Express web framework for Node.js
    Vue.js for the front end

Other packages I've used with this:

    axios and the fetch API
    bootstrap 4
    Vuex for state management
    Vue-router
And by default, I know a little bit of webpack now also.

Recent additions:
```
file uploading iplemented for some routes in the backend, using the multer package.
basic image handling, with a basic image gallery with basic CRD (no U) functionality
form validation added in the login, new user, new post and edit post HTML forms. Based on a cookbook example from vuejs.org.
a new About page.
```
# Setup:
```
cd ./vue_frontend
npm install
cd ../express_backend
npm install
```
# Run in dev mode:
```
in one terminal:
cd ./vue_frontend
npm run serve
in another terminal:
cd ./express_backend
npm run dev
```
