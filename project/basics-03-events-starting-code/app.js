const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      inputName: "",
    };
  },
  methods: {
    countUp() {
      this.counter = this.counter + 1;
    },

    countDown() {
      this.counter = this.counter - 1;
    },

    AddTwo() {
      this.counter = this.counter + 2;
    },

    AddName(event) {
      this.name = event.target.value;
    },

    confirmInput() {
      this.inputName = this.name;
    },

    
    submitForm() {
      // event.preventDefault();
      alert('Well Done!')
    }
  },
});

app.mount("#events");
