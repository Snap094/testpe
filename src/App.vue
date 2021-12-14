<template>
  <div id="app" class="global-content">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage,
  }
}
</script>

<style lang="scss">
  @import "~normalize.css";
  @import "assets/style/style.scss";

  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap');

  *{
    font-family: 'Manrope', sans-serif;
  }
</style>
