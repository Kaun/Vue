const app = Vue.createApp({
  data() {
    return {
      blockA: false,
      blockB: false,
      blockC: false,
    }
  },
  computed: {
    blockAClasses() {
      return { active: this.blockA }
    },
    blockBClasses() {
      return { active: this.blockB }
    },
    blockCClasses() {
      return { active: this.blockC }
    },
  },
  methods: {
    checkBlock(nameBlock) {
      if (nameBlock === 'A') {
        console.log('A')
        this.blockA = !this.blockA
      } else if (nameBlock === 'B') {
        console.log('B')
        this.blockB = !this.blockB
      } else if (nameBlock === 'C') {
        console.log('C')
        this.blockC = !this.blockC
      }
    },
  },
})
app.mount('#styling')
