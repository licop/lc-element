import LgSteps from '../'

export default {
  title: 'LgSteps',
  component: LgSteps
}

export const Steps = () => ({
  components: { LgSteps },
  template: `<div>
    <lg-steps :count="count" :active="active"></lg-steps>
    <button @click="next">下一步</button>
  </div>`,
  data () {
    return {
      count: 4,
      active: 0
    }
  },
  methods: {
    next () {
      this.active++
    }
  }
})
