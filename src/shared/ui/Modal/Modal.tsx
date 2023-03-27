import { type PropsWithChildren } from 'react'
import classNames from 'classnames'

import { Portal } from '../Portal/Portal'

import styles from './style.module.scss'

export const Modal = ({ children }: PropsWithChildren) => {
  return <Portal element={document.querySelector('.app')}>
    <div className={classNames(styles.Modal, styles.Modal__Overlay)}>
      <div className={classNames(styles.Modal__Content)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis facilis hic minus perferendis, reprehenderit veniam veritatis. A ab delectus, dicta, dignissimos dolore ea eaque eos est fugiat id incidunt, ipsam laudantium neque omnis quisquam reiciendis reprehenderit soluta tenetur. Ab aperiam architecto assumenda autem consequatur deleniti dolores eius fugiat id laborum laudantium modi molestias natus nemo, odit omnis perspiciatis praesentium quasi quo quod quos repellat sed suscipit velit voluptatum? Ab accusamus alias aperiam at consectetur deleniti eaque et exercitationem facere ipsam laudantium maiores minima molestiae molestias neque nisi nostrum quam quibusdam, quis quos rem reprehenderit saepe sint temporibus totam unde!
      </div>
    </div>
  </Portal>
}
