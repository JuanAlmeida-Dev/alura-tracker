import Task from "../views/Task.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [{
    path: '/task',
    name: 'tarefas',
    component: Task
}];


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;