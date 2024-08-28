<template>
    <section>
        <RouterLink to="/project/new" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo projeto</span>
        </RouterLink>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td>
                        <RouterLink :to="`/project/${project.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </RouterLink>
                        <button class="button ml-2 is-danger" @click="del(project.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
 /* eslint-disable */
import { useStore } from '@/store';
import { GET_PROJECTS } from '@/store/actions';
import { DELETE_PROJECT } from '@/store/mutations';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'List',

    methods: {
        del (id: String) {
            this.store.commit(DELETE_PROJECT, id);
        }
    },

    setup () {
        const store = useStore()
        store.dispatch(GET_PROJECTS);
        return {
            store,
            projects: computed(() => store.state.projects)
        }
    }
});
</script>