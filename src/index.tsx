import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from 'app/App'

import { ThemeProvider } from 'shared/config/theme'
import { LanguageProvider } from 'shared/config/language'

import 'shared/config//theme/styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </BrowserRouter>
)
