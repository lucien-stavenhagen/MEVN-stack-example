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
    <article class="border bg-light border-primary rounded p-2 clearfix mb-1">
      <h2>About me:</h2>
      <p>It all started in 1963, at a small hospital in what was then the small town of Walnut Creek, CA. It all finally ended right here. In this app, on the page you're reading now. To the best of my knowledge, anyway.</p>
      <hr/>
      <h2>Web Development:</h2>
      <img class="i-left" src="../../assets/webdev.jpg"><p>I actually kind of stumbled into web development. It wasn't one of those things I always knew I wanted to do as a child, or I was born to do it. But it was something I finally just found and have been pursuing it ever since. At the time, my career in software QA had ended - not on the best note, admittedly - and I was looking about for something else to learn how to do. Looking back, I was quite relieved that I had left software test; I made quite a number of attempts to get another QA job, but in truth those job searches were with the half-hearted enthusiasm that I'd become accustomed to with anything having to do with QA. It took a while for me to come around to realizing that I really didn't want to do that anymore. It wasn't so much internalizing the reality of it, it was more just a matter of finally admitting it and being honest with myself. And mustering the courage to start looking at a change in career, up to and including the possibility of a total overhaul of what I was doing.</p>
      <hr/>
      <img class="i-right" src="../../assets/2560px-MaisonCarree.jpg"><p>I looked at a number of different options for what to do next. Most involved getting out of software altogether; they included going back to college to finish my Linguistics MA - UT Austin promptly shot that down as my prior coursework was far older than the 6 year statute of limitations on old coursework. Classical studies was another candidate, again involving starting over completely with a new course of study at university. Even now, I still love the idea of possibly being immersed in Greek and Roman architecture and being able to learn Greek and/or Latin and getting paid for it. But this option was also far too ambitious. It would have taken longer to complete than I'm probably going to live, and at death I would have owed somebody somewhere a fortune fit for a Wall Street bank CEO.</p>
      <hr/>
      <p>After several more ideas like that, I began to see that a change that large wasn't practical. And of course, none of those ideas were going to lead to a career where I could take care of myself. In fact, I had had several discussions about this with my dad and his conclusion was similar - that the ideas I had were certainly interesting and centered around interesting subjects, but none were practicable as a way to return to making a living. At that point, I put software development back on the table of options to consider.</p>
      <p>I remember it just occurring to me one day - hey, what about web development? I'd somehow had a nearly 20 year career in QA without ever actually learning how the Internet works. So I already was very aware of this large opacity in my professional knowledge, but that was the first time I'd actually considered web development seriously. So I started researching it and began learning The Big 3 of web development: HTML5, CSS3 and Javascript.
      </p>
      <img class="i-left" src="../../assets/dad.jpg"><p>My first <q>major</q> project was a rework of my dad's website (entitled <dfn>Solis Litteris Gloria</dfn>, see the image at left). He had written the original some years ago in an ancient version of HTML and it needed updating. Fortunately, it was all simple static content that only required a set of simple HTML pages; nothing dynamic or requiring a CMS or a full-stack app with CRUD functionality. There was a lot of it, so it gave me tons of practice at basic HTML and CSS, and even plenty of opportunities to learn RWD and how to make things mobile-friendly. I just had a ball working on it; days and days went by unnoticed. I learned all kinds of cool stuff with it, like CSS grid and other lovlies in HTML5/CSS3 and I just couldn't put it down. That's when I had the notion that maybe this was something I really enjoyed, had at least a basic talent for, and, because all the tools and educational materials are freely available everywhere on the web, was actually a goal achievable within polynomial time. Since then, I took a break to learn a good CMS, so spent a while learning Wordpress. I even wrote a theme for it to help teach myself how it worked. I still love Wordpress and I use it as the CMS for <a href="https://lstavenhagen.com" target="_blank">my own website</a>.</p>
      <hr/>
      <img class="i-right" src="../../assets/logo.png"><p>So that's how it's started, and so far I haven't lost interest. My main interest currently is web app development with the <dfn>MEVN stack</dfn> (MongoDB and Node.js/Express on the backend serving up RESTful APIs, and Vue.js on the front end). This app is my first <q>major</q> effort with that stack (though I started off with React on the front end). As for whether I'll try to go full-stack or specialize in the front end is still something I'm thinking about. I seem to really love front-end, so I might eventually steer towards that specialty. Vue.js is my front-end framework of choice at the moment, but I enjoy React as well.</p>
      <hr/>
      <p>Well, that's it. Onward and, hopefully, upward. LS.</p>
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
.i-left{
  max-width: 50%;
  width: auto;
  float: left;
  margin-right: .9rem;
  border: 3px solid rgba(0,0,0,.2);
  border-radius: 3px;
}
.i-right{
  max-width: 50%;
  width: auto;
  float: right;
  margin-left: .8rem;
  border: 3px solid rgba(0,0,0,.2);
  border-radius: 3px;
}
@media screen and (max-width:768px){
  .i-left,
  .i-right{
    max-width: 100%;
    float: none;
    display: block;
    margin: auto;
  }
}
</style>