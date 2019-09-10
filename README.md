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
go to http://localhost:8080
```
# Deploy on Heroku directly from the branch
```
This is a little hackish, flying under the radar of Git a little bit. Research on a better way to do this is underway:

Clone the branch and detach the working copy from git completely: 

git clone --branch deploy https://github.com/lucien-stavenhagen/MEVN-stack-example.git
cd MEVN-stack-example
rm -rf ./.git 

this detaches the working copy from git completely

Now reinit as a brand new local repo

cd ./express_backend
git init
git add . && git commit -m"..."

Create heroku app and setup environment variables:
in terminal:

heroku create
heroku config:set VUE_APP_HOST_NAME="https://fathomless-waters-52323.herokuapp.com" (or whatever the app FQDN is. to help out the frontend in finding the URL to the backend API for now)
heroku config:set PRIVATE_KEY="abc-123+"
heroku config:set NODE_ENV="production"

Set the local repo remote to point to the repo up in heroku:

heroku git:remote -a fathomless-waters-52323
git push heroku remote

and that should, repeat should, work.
```
