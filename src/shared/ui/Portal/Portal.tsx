import { type PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({
  element, children
}: PropsWithChildren<{ element: HTMLElement | null }>) => {
  return createPortal(children, element ?? document.body)
}
