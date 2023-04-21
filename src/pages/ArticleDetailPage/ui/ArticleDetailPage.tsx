import React from 'react'
import { Box, Skeleton, Typography } from '@mui/material'

import {
  articleModel,
  type IBlockCode,
  type IBlockImage,
  type IBlockText,
  type IBlockType,
} from 'entities/Article'

import styles from './styles.module.scss'

const isTextBlock = (block: IBlockType): block is IBlockText => {
  return block.type === 'text'
}

const isImageBlock = (block: IBlockType): block is IBlockImage => {
  return block.type === 'image'
}

const isCodeBlock = (block: IBlockType): block is IBlockCode => {
  return block.type === 'code'
}

export const ArticleDetailPage = () => {
  const { data, isFetching } = articleModel.useGetArticleByIdQuery(1)

  if (isFetching) {
    return (
      <div className={styles.ArticleDetailPage}>
        <Skeleton width={160} />
        <Skeleton width={180} />
        <Skeleton width={180} />
        <Skeleton variant="rectangular" width={718} height={500} />

        {new Array(15).fill(null).map((_, index) => (
          <Skeleton key={index} width={718} />
        ))}
      </div>
    )
  }

  return (
    <div className={styles.ArticleDetailPage}>
      <Box>
        <Typography fontSize={24}>{data?.title}</Typography>
      </Box>

      <Box mt="5px">
        <Typography fontSize={20}>{data?.subtitle}</Typography>
      </Box>

      <Box mt="5px">
        <span className={styles.ArticleDetailPage__CreatedAt}>
          {data?.createdAt}
        </span>
      </Box>

      {data?.img && (
        <Box mt="15px">
          <img
            className={styles.ArticleDetailPage__Image}
            src={data?.img}
            alt="main"
          />
        </Box>
      )}

      {data?.blocks.map((block, index) => {
        if (isTextBlock(block)) {
          return (
            <Box className={styles.ArticleDetailPage__TextBlock} key={index}>
              <b>{block.title}</b>
              {block.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </Box>
          )
        }

        if (isImageBlock(block)) {
          return (
            <React.Fragment key={index}>
              <b>{block.title}</b>
              <Box>
                <img
                  className={styles.ArticleDetailPage__Image}
                  src={block.src}
                  alt={block.src}
                />
              </Box>
            </React.Fragment>
          )
        }

        if (isCodeBlock(block)) {
          return (
            <pre key={index} className={styles.ArticleDetailPage__CodeBlock}>
              <code key={index}>{block.code}</code>
            </pre>
          )
        }

        return <></>
      })}
    </div>
  )
}
