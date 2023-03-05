import CircularProgress from '@mui/material/CircularProgress'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import './i18n'

import { PersistGate } from 'redux-persist/integration/react'

import { App } from './App'
import { persistor, store } from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<CircularProgress />}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </HashRouter>,
)
