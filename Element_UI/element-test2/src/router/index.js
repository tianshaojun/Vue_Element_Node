import Vue from 'vue';
import Router from 'vue-router';

import Catalogue from '@/views/Catalogue';  //目录列表
import Form from '@/views/Form';  //表单验证基本用法
import FormTwo from '@/views/FormTwo';  //表单验证高级用法
import Case from '@/views/Case';  //案例


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
            name: 'local_form',
            component: Form
        },
        {
            path: '/form2',
            name: 'advance_form',
            component: FormTwo
        },
        {
            path: '/case',
            name: 'case_form',
            component: Case
        }
    ]
})

export default router;