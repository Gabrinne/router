import HomeComponent from './components/HomeComponent.vue'
import TasksComponent from './components/TasksComponent.vue'
import ProductsComponent from './components/ProductsComponent.vue'
import Error404Component from './components/Error404Component.vue'


export default [
  {path: '/', component: HomeComponent},
  {path: '/products', component: ProductsComponent, name: 'produtos'},
  {path: '/tarefa/:id', component: TasksComponent, name: 'tarefa', props: true},
  {path: '/redirect', redirect: '/products'}, //ao acessar redirect, redirecione para 'products'
  {path: '*', component: Error404Component}, //rota 404 para urls que nao existem

]
