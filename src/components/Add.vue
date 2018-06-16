<template>
  <div id="add">
    <h2>Add New Blog Post </h2>
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required/>
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Monday</label>
        <input type="checkbox" value="Monday" v-model="blog.categories" />
        <label>Tuesday</label>
        <input type="checkbox" value="Tuesday" v-model="blog.categories" />
        <label>Wednesday</label>
        <input type="checkbox" value="Wednesday" v-model="blog.categories" />
        <label>Thursday</label>
        <input type="checkbox" value="Thursday" v-model="blog.categories" />
         <label>Friday</label>
        <input type="checkbox" value="Friday" v-model="blog.categories" />
         <label>Saturday</label>
        <input type="checkbox" value="Saturday" v-model="blog.categories" />
         <label>Sunday</label>
        <input type="checkbox" value="Sunday" v-model="blog.categories" />
      </div>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thx For adding your blog</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title:{{ blog.title }}</p>
      <p>Blog Content: </p>
      <p>{{ blog.content }}</p>
      <p>Blog Days</p>
      <ul>
        <li v-for="category in blog.categories" :key="category">
          {{ category }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: []    
      },
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http.post("https://vue-blog-app-9ee28.firebaseio.com/posts.json",this.blog)
   .then(function(data) {
          console.log(data);
          this.submitted=true
        });
    }
  }
};
</script>

<style scoped>
#add * {
  box-sizing: border-box;
}
#add {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
