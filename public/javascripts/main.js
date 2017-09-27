import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'

import Farmers from './farmers/collection'
import ListView from './farmers/views/list'

$(() => {
  const collection = new Farmers()
  const listView   = new ListView({ collection })

  collection.fetch().done(() => {
    listView.render()
  })
})
