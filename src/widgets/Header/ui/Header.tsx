import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { AppLink, FlexContainer } from 'shared/ui'
import { useAppSelector } from 'shared/hooks'

import { selectors } from 'features/AuthByLogin'

import { type HeaderProps } from '../types/HeaderProps'
import { NavigationConfig, NavigationRoutes } from '../lib/navigation.config'

import styles from './style.module.scss'

function NavigationList() {
  const { t } = useTranslation()

  const user = useAppSelector(selectors.getAuthData)
  const authData = user.authData

  return (
    <>
      {Object.values(NavigationConfig).map((link) => {
        let linkToPage = link.to

        if (link.key === NavigationRoutes.PROFILE) {
          if (!authData) {
            return null
          }
          linkToPage = String(link.to) + `/${String(authData?.id)}`
        }

        return (
          <AppLink key={link.key} to={linkToPage}>
            {t(`nav_links.${link.key}`)}
          </AppLink>
        )
      })}
    </>
  )
}

export const Header = ({
  className,
  leftElement,
  rightElement,
}: HeaderProps) => {
  return (
    <div className={cn(styles.Header, className)}>
      {leftElement}
      <FlexContainer justifyContent="end">
        <div className={styles.Header__Menu}>
          <NavigationList />
        </div>
      </FlexContainer>
      {rightElement}
    </div>
  )
}
