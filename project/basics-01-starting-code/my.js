const app = Vue.createApp({
  data() {
    return {
      task: "Vue!",
      nameSite: "Kaun clowd",
      linkKaun: "https://kaun.tk:8555/apps/dashboard/",
    };
  },
  methods: {
    outGoal() {
      const randomNum = Math.random();
      if (randomNum < 0.5) {
        return "I pass";
      } else {
        return "I win";
      }
    },
  },
});
app.mount("#section");