import React from 'react'
import { Skeleton, Typography } from '@mui/material'

import { articleModel } from 'entities/Article'

// TODO - сделать адекватные реэкспорты ...
import {
  type IBlockCode,
  type IBlockImage,
  type IBlockText,
  type IBlockType,
} from 'entities/Article/model/types/articleType'

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
      <div>
        <Skeleton width={160} />
        <Skeleton width={180} />
        <Skeleton width={180} />
        <Skeleton variant="rectangular" width={500} height={500} />

        {new Array(15).fill(null).map((_, index) => (
          <Skeleton key={index} width={500} />
        ))}
      </div>
    )
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 500,
      }}
    >
      <Typography fontSize={24}>{data?.title}</Typography>
      <Typography fontSize={20}>{data?.subtitle}</Typography>
      <span>{data?.createdAt}</span>

      {data?.img && (
        <img
          style={{
            width: '100%',
            maxWidth: '100%',
            display: 'block',
          }}
          src={data?.img}
          alt="main"
        />
      )}

      {data?.blocks.map((block, index) => {
        if (isTextBlock(block)) {
          return (
            <React.Fragment key={index}>
              <p>{block.title}</p>
              {block.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </React.Fragment>
          )
        }

        if (isImageBlock(block)) {
          return (
            <React.Fragment key={index}>
              <p>{block.title}</p>
              <img src={block.src} alt={block.src} />
            </React.Fragment>
          )
        }

        if (isCodeBlock(block)) {
          return <code key={index}>{block.code}</code>
        }

        return <></>
      })}
    </div>
  )
}
