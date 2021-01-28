const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish Vue course",
      linkTest: "http://google.com"
    };
  },
});
app.mount("#user-goal");
