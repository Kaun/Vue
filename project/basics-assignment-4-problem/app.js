// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//       name: 'ass',
//     }
//   },
//   methods: {
//     setName(event) {
//       this.name = event.target.value
//     },
//     add(num) {
//       this.counter = this.counter + num
//     },
//     reduce(num) {
//       this.counter = this.counter - num
//       // this.counter--;
//     },
//     resetName() {
//       this.name = ''
//     },
//   },
// })

// app.mount('#assignment')

const app = Vue.createApp({
  data() {
    return {
      styleField: '',
      toggle: false,
    }
  },
  computed: {
    userStyle() {
      if (this.styleField === 'user1') {
        return { user1: true }
      } else if (this.styleField === 'user2') {
        return { user2: true }
      }
    },
  },
  methods: {
    toggleDisplay() {
      //   this.toggle = !this.toggle
      //   console.log(this.toggle)
      console.log('dsd')
    },
  },
})

app.mount('#assignment')
