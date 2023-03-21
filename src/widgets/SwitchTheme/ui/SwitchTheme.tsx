import { type FC } from 'react'
import cn from 'classnames'

import { Theme, useTheme } from 'shared/providers/theme'

import styles from './styles.module.scss'

export const SwitchTheme: FC = () => {
  const { theme, setTheme } = useTheme()
  const isDarkAppliedTheme = theme === Theme.DARK

  return (
    <div
      className={cn(styles.Switcher, {
        [styles.Switcher_checked]: isDarkAppliedTheme
      })}
    >
      <input
        className={styles.Switcher__Checkbox}
        type="checkbox"
        id="toggle_checkbox"
        checked={isDarkAppliedTheme}
        onChange={setTheme}
      />
      <label className={styles.Switcher__Label} htmlFor="toggle_checkbox">
        <div className={styles.Switcher__Star} />
      </label>
    </div>
  )
}
