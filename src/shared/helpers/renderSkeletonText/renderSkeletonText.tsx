import { Skeleton } from '@mui/material'

export function renderSkeletonText(countLines = 5) {
  return new Array(countLines)
    .fill(null)
    .map((_, index) => <Skeleton key={index} />)
}
