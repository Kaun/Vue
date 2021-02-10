const app = Vue.createApp({
  data() {
    return { goals: [], goal: '' }
  },
  computed: {
    visibleProp() {
      if (this.goals.length != 0) {
        return { hidden: true }
      } else {
        return { visible: true }
      }
    },
  },
  methods: {
    AddGoal() {
      if (this.goal !== '') {
        this.goals.push(this.goal)
        this.goal = ''
      }
    },
  },
})

app.mount('#user-goals')
