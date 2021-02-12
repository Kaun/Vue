const app = Vue.createApp({
  data() {
    return {
      task: '',
      tasks: [],
      showBtn: true,
    }
  },
  computed: {
    hideShowText() {
      if (this.showBtn) {
        return 'Hide List'
      } else {
        return 'Show List'
      }
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.task)
      this.task = ''
    },
    hideShow() {
      this.showBtn = !this.showBtn
    },
    removeGoal(index) {
      this.tasks.splice(index, 1)
    },
  },
})

app.mount('#assignment')
