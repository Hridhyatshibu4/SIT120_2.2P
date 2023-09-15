const app = Vue.createApp({
    data() {
        return {
            newTask: {
                text: '',
                status: 'To Do'
            },
            tasks: []
        };
    },
    methods: {
        addTask() {
            if (this.newTask.text.trim() !== '') {
                this.tasks.push({ text: this.newTask.text, status: this.newTask.status, completed: false });
                this.newTask.text = '';
                this.newTask.status = 'To Do'; // Reset the status
            }
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
        }
    },
    computed: {
        tasksToDo() {
            return this.tasks.filter(task => task.status === 'To Do');
        },
        tasksInProgress() {
            return this.tasks.filter(task => task.status === 'In Progress');
        },
        tasksCompleted() {
            return this.tasks.filter(task => task.status === 'Completed');
        }
    }
});

app.mount('#app');
