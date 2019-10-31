<template>
  <div class="container">
    <div class="jumbotron text-center border border-primary clearfix">
      <h1>Home Page Of Lucien Stavenhagen</h1>
      <hr />
      <img class="main-img" src="../../assets/wilee.jpg" />
      <p
        class="main-text"
      >This is the homepage of Lucien Stavenhagen, in a very basic blog web app example. It features full CRUD capability and is a full-stack app written with the MEVN stack (Mongodb, Express Vue.js and Node.js).</p>
      <p class="p-header">Features:</p>
      <p class="main-text">
        On the back end:
        <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB (Atlas)</li>
        </ul>
        And on the front end:
        <ul>
        <li>Vue.js</li>
        <li>Bootstrap 4</li>
        </ul>
        It’s a full-stack app using an MVC design pattern, with the front end and back end communicating via a REST API. The Mongo database is hosted out in the cloud using Atlas. A further list of features includes:
        <ul>
        <li>JWT web token authentication for selected backend routes.</li>
        <li>password encryption.</li>
       <li>TinyMCE WYSIWYG HTML editor.</li>
        <li>Vuex for centralized state management.</li>
        <li>Vue router used for general navigation and guarding selected routes against unauthorized access.</li>
        <li>login information persistence with browser localstorage.</li>
        <li>full CRUD functionality for posts.</li>
        <li>full CRD (no U) functionality in the image gallery.</li>
        <li>form validation.</li>
        <li>Image gallery with two switchable views: a grid view and a carousel view.</li>
        <li>hand-coded pagination.</li>
        <li>Bootstrap 4.</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.main-img {
  max-width: 60%;
  margin-right: 1.03rem;
  margin-bottom: 0.4rem;
  width: auto;
  float: left;
  border-radius: 3px;
  border: 3px solid rgb(0, 0, 0, 0.2);
}
.main-text,
.main-quotes {
  text-align: left;
}
.main-text ul{
  list-style-type: circle;
  list-style-position: inside;
}
.p-header{
  font-size: 1.2rem;
}
@media screen and (max-width: 576px) {
  .main-img {
    display: block;
    float: none;
    margin: auto;
  }
}
</style>
