import Vue from 'vue';
import VueRouter from 'vue-router';
import FavoriteProducts from './components/FavoriteProducts';
import SecondPage from './components/SecondButton';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: FavoriteProducts,
    },
    {
        path: '/second',
        component: SecondPage,
    }
]

export default new VueRouter({
    mode: 'history',
    routes
}
    
)