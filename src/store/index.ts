import Project from "@/interfaces/Project";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT, NOTIFICATION } from "./mutations";
import {Notification} from "@/interfaces/Notification";

interface State {
    projects: Project[]
    notifications: Notification[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
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
        [NOTIFICATION](state, notification: Notification){
            notification.id = new Date().getTime();
            state.notifications.push(notification);

            setTimeout(() => {
                state.notifications = state.notifications.filter(notif => notif.id !== notification.id);
            }, 3000);
        }
    }
});

export function useStore(): Store<State> {
    return vuexUseStore(key);
}