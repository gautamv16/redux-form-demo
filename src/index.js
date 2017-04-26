import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { App, Code, Markdown, Values, generateExampleBreadcrumbs } from 'redux-form-website-template'

injectTapEventPlugin();
const dest = document.getElementById('content')
const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})

const store =
  (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

let render = () => {
  const WizardForm = require('./WizardForm').default
  const rawWizard = require('!!raw-loader!./WizardForm')
  const rawValidate = require('!!raw-loader!./validate')
  const rawRenderField = require('!!raw-loader!./renderField')
  const WizardFormFirstPage = require('!!raw-loader!./WizardFormFirstPage')
  const WizardFormSecondPage = require('!!raw-loader!./WizardFormSecondPage')
  const WizardFormThirdPage = require('!!raw-loader!./WizardFormThirdPage')

  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Card>
        <div className="cardcontent">
       
        <WizardForm onSubmit={showResults}/>
        </div>
        </Card>
      </MuiThemeProvider>
    </Provider>,
    dest
  )
}

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={error} className="redbox"/>,
      dest
    )
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  const rerender = () => {
    setTimeout(render)
  }
  module.hot.accept('./WizardForm', rerender)
  module.hot.accept('./WizardForm', rerender)
  module.hot.accept('./WizardFormFirstPage', rerender)
  module.hot.accept('./WizardFormSecondPage', rerender)
  module.hot.accept('./WizardFormThirdPage', rerender)
  module.hot.accept('./WizardFormThirdPage', rerender)
  module.hot.accept('!!raw-loader!./validate', rerender)
  module.hot.accept('!!raw-loader!./renderField', rerender)
  module.hot.accept('!!raw-loader!./WizardFormFirstPage', rerender)
  module.hot.accept('!!raw-loader!./WizardFormSecondPage', rerender)
  module.hot.accept('!!raw-loader!./WizardFormThirdPage', rerender)
}

render()
