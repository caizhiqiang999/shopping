<template>
  <div id="app">
	<keep-alive exclude="Detail">
		<router-view></router-view>
	</keep-alive>
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from './components/navbar/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar,
	
  }
}
</script>

<style>
@import './assets/css/base.css';
#app{
	
}
</style>
