import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Test from './components/Test.vue'
import TestTypeList from './components/TestTypeList.vue'
import TestMenu from './components/TestMenu.vue'
import RegularTest from './components/RegularTest.vue'
import TypeSpeedTest from './components/TypeSpeedTest.vue'
import NewRegularTest from './components/NewRegularTest.vue'
import NewRegularTestMenu from './components/NewRegularTestMenu.vue'
import NewRegularSingleTest from './components/NewRegularSingleTest.vue'
import NewRegularMultiTest from './components/NewRegularMultiTest.vue'
import NewRegularTrueFalseTest from './components/NewRegularTrueFalseTest.vue'
import TestCollection from './components/TestCollection.vue'
import TestCollectionDetails from './components/TestCollectionDetails.vue'
import TestDetails from './components/TestDetails.vue'
import NextTest from './components/NextTest.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

const routes = [
  { path: '/', component: SignIn, name: 'Root' },
  { path: '/home/:user_id', component: Home, props: true, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/tests/types', component: TestTypeList, name: 'Test Types' },
  { path: '/quesions/:question_id', component: Test, name: 'Test' },
  {
    path: '/test_menu/:user_id/:tests_group_id',
    component: TestMenu,
    name: 'TestMenu'
  },
  { path: '/tests', component: TestCollection, name: 'TestCollection' },
  {
    path: '/regular_test/:user_id/:group_id',
    component: RegularTest,
    name: 'RegularTest'
  },
  {
    path: '/type_speed_test/:user_id/:group_id',
    component: TypeSpeedTest,
    name: 'TypeSpeedTest'
  },
  {
    path: '/regular_test/:user_id/:group_id/new',
    component: NewRegularTest,
    name: 'NewRegularTest'
  },
  {
    path: '/regular_test/single_select/:user_id/:group_id',
    component: NewRegularSingleTest,
    name: 'NewRegularSingleTest'
  },
  {
    path: '/regular_test/multi_select/:user_id/:group_id',
    component: NewRegularMultiTest,
    name: 'NewRegularMultiTest'
  },
  {
    path: '/regular_test/true_false/:user_id/:group_id',
    component: NewRegularTrueFalseTest,
    name: 'NewRegularTrueFalseTest'
  },
  {
    path: '/regular_test/:user_id/:group_id/new/menu',
    component: NewRegularTestMenu,
    name: 'NewRegularTestMenu'
  },

  {
    path: '/tests/:user_id/:test_col_id/',
    component: TestCollectionDetails,
    name: 'TestCollectionDetails'
  },
  {
    path: '/test_details/:test_id',
    component: TestDetails,
    name: 'TestDetails'
  },
  {
    path: '/hiring_test/test/start',
    component: NextTest,
    name: 'NextTest'
  },
  {
    path: '/user/signin',
    component: SignIn,
    name: 'SignIn'
  },
  {
    path: '/user/signup',
    component: SignUp,
    name: 'SignUp'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
