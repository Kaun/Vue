const app = Vue.createApp({
  data() {
    return {
      result: 0,
    }
  },
  watch: {
    result() {
      that = this
      setTimeout(function () {
        that.result = 0
      }, 5000)
    },
  },
  methods: {
    add(num) {
      this.result += num
    },
  },
  computed: {
    resultField() {
      return this.result === 37
        ? this.result
        : this.result < 37
        ? this.result + ' ' + 'Not there yet'
        : this.result + ' ' + 'Too much!'
    },
  },
})

app.mount('#assignment')
