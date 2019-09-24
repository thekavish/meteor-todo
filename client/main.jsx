import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import App from '../imports/ui/App'
import '../imports/api/models/tasks'

Meteor.startup(() => {
  render(<App/>, document.getElementById('render-target'))
})
