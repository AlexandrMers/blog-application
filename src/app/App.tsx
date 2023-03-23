import { type FC, Suspense } from 'react'

import { Layout } from 'shared/ui'

// ~ widgets layout
import { Header } from '../widgets/Header'
import { SideBar } from 'widgets/SideBar'
import { SwitchTheme } from 'widgets/SwitchTheme'
import { SelectLanguage } from 'widgets/SelectLanguage'
import { PageLoader } from '../widgets/PageLoader'

// ~ app layer
import { AppRoute } from './providers/router'

import './styles/index.scss'

const App: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Header leftElement={<SelectLanguage />} />
      <Layout.Container>
        <Layout.SideBar>
          <SideBar endCellRender={<SwitchTheme />} />
        </Layout.SideBar>
        <Layout.Content>
          <AppRoute />
        </Layout.Content>
      </Layout.Container>
    </Suspense>
  )
}

export default App
