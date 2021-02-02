const app = Vue.createApp({
  data() {
    return {
      result: 0,
      text: '',
    }
  },
  methods: {
    addName(event) {
      this.text = event.target.value
    },

    add(num) {
      this.result += num
    },
    sub() {
      console.log('we here')
    },
  },
  computed: {
    addLastName() {
      console.log('dsds')
      return this.text + 'aaa'
    },
    // result1() {
    //   return this.result
    // },
  },
})

app.mount('#assignment')
