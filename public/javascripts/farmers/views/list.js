import { View } from 'backbone'

import ItemView from './item'

const ListView = View.extend({
  el: '[data-root]',

  render() {
    this.collection.each((model) => {
      const farmerView = new ItemView({ model })

      this.$el.append(farmerView.render().el)
    })

    return this
  }
})

export default ListView
