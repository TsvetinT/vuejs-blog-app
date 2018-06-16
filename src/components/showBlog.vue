<template>
  <div v-theme="'narrow'" id="show-blog">
    <h1>All Blogs</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">

      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title }}</h2>
      </router-link>
      <article> {{ blog.content | snippet }}</article>
      <button v-on:click="removeElement(blog)">Remove</button>
    </div>
  </div>
</template>

<script>
import searchMixin from "./mixins/searchMixin";

export default {
  components: {},
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {
   removeElement: function (index) {
    this.blogs.splice(index,1);
  }
  },

  created() {
    this.$http
      .get("https://vue-blog-app-9ee28.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
  },
  mixins: [searchMixin]
};
</script>

<style scoped>
#show-blog {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: rgba(238, 238, 238, 0.692);
}
input {
      padding: 10px;
    width: 100%;
}
</style>
