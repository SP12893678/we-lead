import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShopCourse from '@/components/ShopCourse'
import Product from '@/components/Product'
import TeacherIntro from '@/components/TeacherIntro'
import Post from '@/components/Post'
import Cart from '@/components/Cart'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import TeachCourse from '@/components/TeachCourse'
import NewCourse from '@/components/NewCourse'
import EditCourse from '@/components/EditCourse'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: Home,
          name: 'Home'
        },
        {
          path:'/ShopCourse',
          component:ShopCourse,
          name:'ShopCourse'
        },
        {
          path: '/product',
          component: Product,
          name: 'Product'
        },
        {
          path:'/TeacherIntro',
          component:TeacherIntro,
          name:'TeacherIntro'
        },
        {
          path: '/post',
          component: Post,
          name: 'Post'
        },
        {
          path: '/cart',
          component: Cart,
          name: 'Cart'
        },
        {
          path: '/teachcourse',
          component: TeachCourse,
          name: 'TeachCourse'
        },
        {
          path: '/newcourse',
          component: NewCourse,
          name: 'NewCourse'
        },
        {
          path: '/editcourse',
          component: EditCourse,
          name: 'EditCourse'
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    }
  ],
  mode: 'history'
},

)

router.beforeEach(async (to, from, next) => {
  next()
})

export default router
