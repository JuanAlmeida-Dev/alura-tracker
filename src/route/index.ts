import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Form from "../views/Project/Form.vue";
import Task from "../views/Task.vue";
import Project from "../views/Project.vue";
import List from "@/views/Project/List.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/task',
        name: 'task',
        component: Task
    },
    {
        path: '/project',
        name: 'project',
        component: Project,
        children: [
            {
                path: '',
                name: 'list project',
                component: List
            },
            {
                path: 'new',
                name: 'new project',
                component: Form
            },
            {
                path: ':id',
                name: 'edit project',
                component: Form,
                props: true
        
            }
        ]
    }
];


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;