const x = 'sdd'
const app = Vue.createApp({
  data() {
    return {
      inputText: '',
      outputText: '',
      outputTextEnter: '',
    }
  },
  methods: {
    showAlert() {
      alert('Some message')
    },

    showText(event) {
      this.outputText = event.target.value
    },

    showTextEnter() {
      this.outputTextEnter = this.outputText
    },
  },
})
app.mount('#assignment')
