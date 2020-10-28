<template>
  <div>
    <h2> {{ title }}</h2>

    <h1>
      parametro: {{ $route.params.id}}
    </h1>
    <h1>
      parametro com props: {{ id}}
    </h1>
  </div>
</template>

<script>
export default {
  props: ['id'], //qual item a receber
 data() {
   return {
     title: 'Tasks Page'
   }
 }
}
</script>

<style>

</style>
