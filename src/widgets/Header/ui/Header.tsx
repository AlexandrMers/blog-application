import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { AppLink, FlexContainer } from 'shared/ui'

import { NavigationConfig } from '../lib/navigation.config'
import { type HeaderProps } from '../types/HeaderProps'

import styles from './style.module.scss'

function LinksWithTranslations() {
  const { t } = useTranslation()

  return (
    <>
      {Object.values(NavigationConfig).map((link) => (
        <AppLink key={link.key} to={link.to}>
          {t(`nav_links.${link.key}`)}
        </AppLink>
      ))}
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
          <LinksWithTranslations />
        </div>
      </FlexContainer>
      {rightElement}
    </div>
  )
}
