<template>
  <div class="container">
    <div class="jumbotron text-center border border-primary clearfix">
      <h1>Home Page Of Wile E. Coder</h1>
      <hr />
      <img class="main-img" src="../../assets/wilee.jpg" />
      <p
        class="main-text"
      >This would be the homepage of Wile E. Coder, in a very basic web app example. It features full CRUD capability and is a full-stack app written with the MEVN stack (Mongodb, Express Vue.js and Node.js).</p>
      <p class="main-text">
        Perhaps it'd be good to start off in a non-technical way, and dwell for a moment on something else. So, here are some great quotes to help us get into a good frame of mind:
        <br />
        <q>Beavis, it's not even normal to ask.</q>
        <cite>- Mike Judge</cite>
        <br />
        <q>I've never killed an innocent man.</q>
        <cite>
          - Mark Brandon
          <q>Chopper</q> Read
          <small>(may he R.I.P.)</small>
        </cite>
        <br />
        <q>Those cubicles look like they fell out of the top of the ugly tree and hit every branch on the way down.</q>
        <cite>
          - Eddie M. from Metrowerks, commenting on the
          <q>industrial</q> cubicle design
        </cite>
        <br />
        <q>You buy em books, you send em to school, and they eat the teacher.</q>
        <cite>- Jesse, from 2J's hamburgers</cite>
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
@media screen and (max-width: 576px) {
  .main-img {
    display: block;
    float: none;
    margin: auto;
  }
}
</style>
