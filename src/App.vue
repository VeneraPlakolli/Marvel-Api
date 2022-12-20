<template>
  <div id="app">
    <router-link to="/"><p class="home-text">Home</p></router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  padding: 30px;
  padding-top:40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.home-text {
  color: black;
  font-size: 20px;
  font-weight: bold;
}
.home-text:hover {
  color: rgb(163, 152, 152);
}

</style>
