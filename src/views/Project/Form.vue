<template>
    <section>
        <form @submit.prevent="save">
            <div class="field">
                <label for="nameProject" class="label">Nome do Projeto</label>
                <input type="text" class="input" v-model="nameProject" id="nameProject">
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
 /* eslint-disable */
import { NotificationType } from '@/interfaces/Notification';
import { useStore } from '@/store';
import { UPDATE_PROJECT, ADD_PROJECT } from '@/store/mutations';
import { defineComponent } from 'vue';
import  useNotifier  from '@/hooks/notifier';

export default defineComponent({
    name: 'Form',

    props: {
        id: {
            type: String,
        }
    },

    mounted () {
        if(this.id) {
            const project = this.store.state.projects.find((project: any) => project.id === this.id)
            this.nameProject = project?.name || ''
        }
    },

    data() {
        return {
            nameProject: ''
        };
    },

    methods: {
        save () {
            if(this.id) {
                this.store.commit(UPDATE_PROJECT, { 
                    id: this.id, 
                    name: this.nameProject 
                })
            } else {
                this.store.commit(ADD_PROJECT, this.nameProject)
            }
            this.nameProject = '';
            this.nofitication(NotificationType.SUCCESS, 'Projeto salvo', 'Projeto salvo com sucesso')
            this.$router.push('/Project')
        }
    },
    setup () {
        const store = useStore()
        const { nofitication } = useNotifier()
        return {
            store,
            nofitication
        }
    }
});
</script>