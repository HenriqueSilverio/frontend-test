import { Collection } from 'backbone'

import Farmer from './model'

const Farmers = Collection.extend({
  url: '/fazenda.json',

  model: Farmer,

  comparator(model) {
    return -model.get('positive')
  },

  parse(response) {
    const results = response.data.map((participant) => {
      const name          = participant.name
      const description   = this.unescape(participant.description)
      const picture       = participant.picture
      let positive        = 0
      let negative        = 0
      let total           = 0
      let positivePercent = 0
      let negativePercent = 0

      if (
        participant.hasOwnProperty('positive') &&
        participant.hasOwnProperty('negative') &&
        participant.positive                   &&
        participant.negative
      ) {
        positive        = parseInt(participant.positive, 10)
        negative        = parseInt(participant.negative, 10)
        total           = positive + negative
        positivePercent = Math.round((positive / total) * 100)
        negativePercent = Math.round((negative / total) * 100)
      }

      return {
        name,
        description,
        picture,
        positive,
        negative,
        positivePercent,
        negativePercent
      }
    })

    return results
  },

  unescape(string) {
    return string.replace(/&ordm;/gi, String.fromCharCode(0x00ba))
  }
})

export default Farmers
