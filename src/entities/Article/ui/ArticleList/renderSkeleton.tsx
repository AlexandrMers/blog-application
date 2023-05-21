import { type ReactElement } from 'react'
import { GridItem } from 'shared/ui'
import { Skeleton } from '@mui/material'

const HEIGHT_BIG_CARD = 792
const HEIGHT_SMALL_CARD = 381

export function renderArticleListSkeleton(
  count?: number,
  withBigCard?: boolean
): ReactElement[] {
  return new Array(5).fill(null).map((item, index) => {
    const isFirstElement = index === 0

    return (
      <GridItem
        key={index}
        gridRow={isFirstElement && withBigCard ? ['span', 2] : undefined}
      >
        <Skeleton
          animation="wave"
          sx={{ borderRadius: '20px', bgcolor: 'var(--gray-strong)' }}
          variant="rounded"
          width="100%"
          height={
            isFirstElement && withBigCard ? HEIGHT_BIG_CARD : HEIGHT_SMALL_CARD
          }
        />
      </GridItem>
    )
  })
}
