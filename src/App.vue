<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Add from './components/Add.vue';
import showBlog from './components/showBlog.vue'
import header from './components/header.vue'

export default {
  components: {
    'add':Add,
    'show-blog':showBlog,
    'app-header':header
  },
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style>
body{ 
  margin:0;
  font-family: 'Nunito SemiBold';
}
</style>
