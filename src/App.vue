<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link :to="{name:'produtos'}">Produtos</router-link>
    <router-link :to="{name:'tarefa', params: {id: 3}}">TAREFAS</router-link>


      <router-view></router-view>
  </div>
</template>

<script>
export default {
 name: 'app'
}
</script>

<style>

</style>
