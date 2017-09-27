import { Model } from 'backbone'

const Farmer = Model.extend({
  defaults() {
    return {
      name: '',
      description: '',
      picture: '',
      positive: 0,
      negative: 0,
      positivePercent: 0,
      negativePercent: 0
    }
  }
})

export default Farmer
