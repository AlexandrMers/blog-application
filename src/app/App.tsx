import { type FC, Suspense } from 'react'

import { Box, Layout } from 'shared/ui'

import 'shared/config/theme/styles/index.scss'

// ~ features layer
import { CheckArea } from 'features/TestAsyncReducers'

// ~ widgets layer
import { Header } from 'widgets/Header'
import { SideBar } from 'widgets/SideBar'
import { SwitchTheme } from 'widgets/SwitchTheme'
import { SelectLanguage } from 'widgets/SelectLanguage'
import { PageLoader } from 'widgets/PageLoader'
import { UserManagement } from 'widgets/UserManagement'

// ~ app layer
import { AppRoute } from './providers/router'

const App: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Header
        leftElement={<SelectLanguage />}
        rightElement={
          <Box insideSize="l">
            <UserManagement />
          </Box>
        }
      />
      <Layout.Container>
        <Layout.SideBar>
          <SideBar endCellRender={<SwitchTheme />} />
        </Layout.SideBar>
        <Layout.Content background="var(--gray)">
          <AppRoute />
        </Layout.Content>
      </Layout.Container>

      <div className="CheckAreaButton">
        <CheckArea />
      </div>
    </Suspense>
  )
}

export default App
