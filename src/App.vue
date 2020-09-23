<!--
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-08-23 00:41:28
 * @LastEditors: 小白
 * @LastEditTime: 2020-09-23 13:36:39
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
