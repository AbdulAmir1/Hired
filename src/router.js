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
import TestNavigater from './components/TestNavigater.vue'
const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/tests/types', component: TestTypeList, name: 'Test Types' },
  { path: '/quesions/:question_id', component: Test, name: 'Test' },
  { path: '/test_menu', component: TestMenu, name: 'TestMenu' },
  { path: '/regular_test', component: RegularTest, name: 'RegularTest' },
  { path: '/type_speed_test', component: TypeSpeedTest, name: 'TypeSpeedTest' },
  {
    path: '/regular_test/new',
    component: NewRegularTest,
    name: 'NewRegularTest'
  },
  {
    path: '/regular_test/single_select',
    component: NewRegularSingleTest,
    name: 'NewRegularSingleTest'
  },
  {
    path: '/regular_test/multi_select',
    component: NewRegularMultiTest,
    name: 'NewRegularMultiTest'
  },
  {
    path: '/regular_test/true_false',
    component: NewRegularTrueFalseTest,
    name: 'NewRegularTrueFalseTest'
  },
  {
    path: '/regular_test/new/menu',
    component: NewRegularTestMenu,
    name: 'NewRegularTestMenu'
  },
  {
    path: '/hiring_test/:test_id/start',
    component: TestNavigater,
    name: 'TestNavigater'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
