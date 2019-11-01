<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body,
html,
div,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

body {
  padding: 20px;
}
ul,
li {
  list-style: none;
}
.page-title {
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
}
</style>
