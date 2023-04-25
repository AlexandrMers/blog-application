import {
  type IBlockCode,
  type IBlockImage,
  type IBlockText,
  type IBlockType,
} from '../model'

export const isTextBlock = (block: IBlockType): block is IBlockText => {
  return block.type === 'text'
}

export const isImageBlock = (block: IBlockType): block is IBlockImage => {
  return block.type === 'image'
}

export const isCodeBlock = (block: IBlockType): block is IBlockCode => {
  return block.type === 'code'
}
