import React from 'react'
import { Box, Typography } from '@mui/material'

import { CodeBlock } from 'shared/ui'

import { type IArticleClient } from '../../model'
import {
  isTextBlock,
  isImageBlock,
  isCodeBlock,
} from '../../helpers/articleTypesGuard'

import styles from './styles.module.scss'

export function ArticleDetail({
  img,
  title,
  subtitle,
  createdAt,
  blocks,
}: IArticleClient) {
  return (
    <div className={styles.ArticleDetail}>
      <Box>
        <Typography fontSize={24}>{title}</Typography>
      </Box>

      <Box mt="5px">
        <Typography fontSize={20}>{subtitle}</Typography>
      </Box>

      <Box mt="5px">
        <span className={styles.ArticleDetail__CreatedAt}>{createdAt}</span>
      </Box>

      {img && (
        <Box mt="15px">
          <img className={styles.ArticleDetail__Image} src={img} alt="main" />
        </Box>
      )}

      {blocks.map((block, index) => {
        if (isTextBlock(block)) {
          return (
            <Box className={styles.ArticleDetail__TextBlock} key={index}>
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
                  className={styles.ArticleDetail__Image}
                  src={block.src}
                  alt={block.title}
                />
              </Box>
            </React.Fragment>
          )
        }

        if (isCodeBlock(block)) {
          return <CodeBlock key={index} code={block.code} />
        }

        return <></>
      })}
    </div>
  )
}
