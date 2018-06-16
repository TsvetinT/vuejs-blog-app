import Add from './components/Add.vue';
import showBlog from './components/showBlog.vue';
import singleBlog from './components/singleBlog.vue';

export default [{
    path: '/',
    component: showBlog
  },
  {
    path: '/add',
    component: Add
  },
  {
    path: '/blog/:id',
    component: singleBlog
  }

]
