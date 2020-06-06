import Vue from 'vue';
import Router from 'vue-router';

import Catalogue from '@/views/Catalogue';  //目录列表
import Form from '@/views/Form';  //表单验证基本用法


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: Catalogue
        },
        {
            path: '/home',
            name: 'home',
            component: Catalogue
        },
        {
            path: '/form',
            name: 'form1',
            component: Form
        }
    ]
})

export default router;