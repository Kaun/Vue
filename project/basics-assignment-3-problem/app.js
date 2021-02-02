const app = Vue.createApp({
  data() {
    return {
      result: 0,
      text: '',
      subtext: '',
    }
  },
  watch: {
    result(value) {
      if (value < 37) {
        this.subtext = 'Not there yet'
      } else {
        if (value > 37) {
          this.subtext = 'Too much!'
        }
      }
    },
  },
  methods: {
    add(num) {
      this.result += num
    },
  },
  computed: {},
})

app.mount('#assignment')
