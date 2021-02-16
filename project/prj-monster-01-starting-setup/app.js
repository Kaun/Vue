function randomDamage(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
  data() {
    return {
      healthPlayer: 100,
      healthMonster: 100,
      damages: [],
      damagesPlayer: [],
      damagesMonster: [],
    }
  },
  methods: {
    attackMonster() {
      damage = randomDamage(5, 10)
      this.healthMonster -= damage
      this.damagesMonster.push(damage)
      this.attackPlayer()
    },
    attackPlayer() {
      damage = randomDamage(7, 12)
      this.healthPlayer -= damage
      this.damagesPlayer.push(damage)
    },
  },
  computed: {
    disabledStyle() {
      if (this.healthPlayer <= 0) {
        return { disabled: true }
      }
    },
    styleBarPlayer() {
      return { width: this.healthPlayer + '%' }
    },
    // styleBarMonster() {
    //   return { width: this.healthMonster + '%' }
    // },
  },
})

app.mount('#game')
