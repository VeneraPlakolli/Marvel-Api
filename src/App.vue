<template>
  <div id="app">
    <div class="nav">
      <router-link to="/"><p class="home-text">Home</p></router-link> |
      <router-link to="/comics"><p class="home-text">Comics</p></router-link>
    </div>
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
.nav {
  display: flex;

}
.nav p {
  margin-left: 5px;
  margin-right: 5px;
}
.nav {
  padding: 25px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.home-text {
  color: black;
  font-size: 19px;
  font-weight: bold;
}
.home-text:hover {
  color: rgb(163, 152, 152);
}

</style>
