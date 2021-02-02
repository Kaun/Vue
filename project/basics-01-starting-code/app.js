const app = Vue.createApp({
  data() {
    return {
      courseGoal_1: "Finish Vue course",
      courseGoal_2: "Master Vue",
      linkTest: "http://google.com"
    };
  },
  methods: {
    getGoal() {
      const randomNum = Math.random()
      if (randomNum < 0.4) {
        return this.courseGoal_1
      } else {
        return this.courseGoal_2
      }
    }
  }
});
app.mount("#user-goal");
