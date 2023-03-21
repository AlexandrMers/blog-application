import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import App from 'app/App'

import { ThemeProvider } from 'shared/providers/theme'
import { LanguageProvider } from 'shared/providers/language'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <BrowserRouter>
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </BrowserRouter>
)
