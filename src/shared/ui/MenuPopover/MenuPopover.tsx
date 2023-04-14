import {
  Children,
  cloneElement,
  type PropsWithChildren,
  type ReactElement,
  useRef,
} from 'react'

import { type PopoverOrigin } from '@mui/material/Popover/Popover'
import { Menu } from '@mui/material'

export const MenuPopover = ({
  children,
  isOpen = false,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
  },
  showElement,
  handleClosePopover,
}: PropsWithChildren<{
  isOpen?: boolean
  showElement: ReactElement
  anchorOrigin?: PopoverOrigin
  handleClosePopover: () => void
}>) => {
  const refOfAnchorElement = useRef<Element | null>(null)

  return (
    <>
      {Children.map(children as ReactElement, (child: ReactElement) =>
        cloneElement(child, {
          ...child.props,
          ref: refOfAnchorElement,
        })
      )}

      <Menu
        anchorEl={refOfAnchorElement.current as Element}
        open={isOpen}
        anchorOrigin={anchorOrigin}
        onClose={handleClosePopover}
      >
        {showElement}
      </Menu>
    </>
  )
}
