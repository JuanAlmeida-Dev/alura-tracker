import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import Project from "@/interfaces/Project";
import Task from "@/interfaces/Task";
import {Notification} from "@/interfaces/Notification";
import http from "@/http";
import { UPDATE_PROJECT, NOTIFICATION, DEFINED_PROJECT, ADD_PROJECT, DELETE_PROJECT, DEFINED_TASK } from "./mutations";
import { ALTER_PROJECT, GET_PROJECTS, GET_TASKS, REGISTER_PROJECT, REMOVE_PROJECT } from "./actions";

interface State {
    tasks: Task[]
    projects: Project[]
    notifications: Notification[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        tasks: [],
        projects: [],
        notifications: []
    },
    
    mutations: {
        [ADD_PROJECT](state, nameProject: string){
            const project = {
                id: new Date().toISOString(),
                name: nameProject
            } as Project;
            state.projects.push(project);
        },
        [UPDATE_PROJECT](state, project: Project){
            const index =  state.projects.findIndex(proj => proj.id === project.id);
            state.projects[index] = project;
        },
        [DELETE_PROJECT](state, id: string){
            state.projects = state.projects.filter(proj => proj.id !== id);
        },
        [DEFINED_PROJECT](state, projects: Project[]){
            state.projects = projects;
        },
        [DEFINED_TASK](state, tasks: Task[]){
            state.tasks = tasks;
        },
        [NOTIFICATION](state, notification: Notification){
            notification.id = new Date().getTime();
            state.notifications.push(notification);

            setTimeout(() => {
                state.notifications = state.notifications.filter(notif => notif.id !== notification.id);
            }, 3000);
        }
    },
    actions: {
        [GET_PROJECTS]({commit}){
            http.get('projects')
            .then(response => {
                commit(DEFINED_PROJECT, response.data);
            });
        },
        [GET_TASKS]({commit}){
            http.get('tasks')
            .then(response => {
                commit(DEFINED_TASK, response.data);
            });
        },
        [REGISTER_PROJECT] (context, nameProject: string){
            return http.post('/projects', {
                name: nameProject
            });
        },
        [ALTER_PROJECT] (context, project: Project){
            return http.put(`/projects/${project.id}`,project);
        },
        [REMOVE_PROJECT] (context, id: string){
            return http.delete(`/projects/${id}`)
             .then(() => {
                context.commit(DELETE_PROJECT, id);
            });   
        }      
    }
});

export function useStore(): Store<State> {
    return vuexUseStore(key);
}