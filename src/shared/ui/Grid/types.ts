import { type PropsWithChildren } from 'react'

export interface IGridItemProps extends PropsWithChildren {
  gridRow?: Array<number | string>
  className?: string
}

export interface IGridProps extends PropsWithChildren {
  gap?: string
  columns?: string[]
  className?: string
}
