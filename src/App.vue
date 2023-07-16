<template>
  <div class="app">
      <ul class="">
        <li>
          <router-link to="/map" class="">Karte</router-link>
        </li>
        <li>
          <router-link to="/search" class="">Suchen</router-link>
        </li>
        <img src="../public/Logo.png" alt="">
      </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// eslint-disable-next-line
import VueRouter from 'vue-router'

export default {
  name: "Exter-Karte",
  components: {
    
  },
  mounted() {
    console.log(process.env.VUE_APP_PUBLIC_URL)
  }
  
}


</script>

<style>
img {
  float: right;
  margin-right: 1em;
  width: 180px;
  padding: 0.5em 0em;
}

body {
  background-color: lightgrey;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    border-radius: 5px;
}

li {
  display: inline-block;

}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: 'MontserratSB', 'Montserrat'
}

/* Change the link color to #111 (black) on hover */
li a:hover {
    background-color: #111;
}

@font-face {
  font-family: "MontserratSB";
  src: url(http://kong.bplaced.net/Montserrat-SemiBold.ttf);
}

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');


</style>
