<template>
  <div class="container">
    <div class="jumbotron text-center border border-primary p-5">
      <h1>About Wile E. Coder...</h1>
      <hr class="m-4" />
      <div v-bind:key="quote.id" v-for="quote in quotes">
        <h5 class="font-weight-light">
          <q>{{quote.text}}</q>
          <small>
            <cite>- {{quote.auth}}</cite>
          </small>
        </h5>
        <hr class="m-4" />
      </div>
    </div>
    <article class="border bg-light border-primary rounded p-2">
      <p>About me TBD...</p>
    </article>
  </div>
</template>
<script>
import uuidv1 from "uuid/v1";

export default {
  name: "About",
  data() {
    return {
      quotes: [
        {
          id: uuidv1(),
          text: "Go to heaven for the climate, Hell for the company.",
          auth: "Mark Twain"
        },
        {
          id: uuidv1(),
          text: "Never go to bed mad. Stay up and fight.",
          auth: "Phyllis Diller"
        },
        {
          id: uuidv1(),
          text:
            "Happiness is having a large, loving, caring, close-knit family in another city.",
          auth: "George Burns"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>