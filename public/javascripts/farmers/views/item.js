import { View } from 'backbone'

import template from './item.hbs'

const ItemView = View.extend({
  template,

  render() {
    this.$el.html(this.template(this.model.attributes))

    return this
  }
})

export default ItemView
