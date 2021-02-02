const app = Vue.createApp({
  data() {
    return {
      myName: "Alexey",
      myAge: 31,
      imgURL: "https://wikiway.com/upload/resize_cache/hl-photo/0f8/ac3/1024_800_1/gora_iremel_16.jpg"
    };
  },
  methods: {
    calculateAgeIn5() {
      return this.myAge + 5;
    },
    randomNum() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
