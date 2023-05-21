import { type ProfileResponseType } from 'entities/Profile'

export type BlockType = 'text' | 'code' | 'image'

export interface IBlock {
  type: BlockType
}

export interface IBlockText extends IBlock {
  title: string
  paragraphs: string[]
}

export interface IBlockCode extends IBlock {
  code: string
}

export interface IBlockImage extends IBlock {
  src: string
  title: string
}

export enum CategoryType {
  TRAVEL = 'travel',
  ANALYZE = 'analyze',
  IT = 'it',
  HEALTH = 'health',
  SCIENCE = 'science',
  DESIGN = 'design',
}

export const CategoryDictionary: Record<CategoryType, string> = {
  [CategoryType.ANALYZE]: 'Анализ',
  [CategoryType.DESIGN]: 'Дизайн',
  [CategoryType.IT]: 'IT',
  [CategoryType.HEALTH]: 'Здоровье',
  [CategoryType.SCIENCE]: 'Наука',
  [CategoryType.TRAVEL]: 'Путешествия',
}

export type IBlockType = IBlockText | IBlockCode | IBlockImage

export interface IArticleClient {
  id: number
  title: string
  subtitle: string
  img: string
  createdAt: string
  author: ProfileResponseType
  type: string[]
  blocks: IBlockType[]
}

export type IArticleResponse = Omit<IArticleClient, 'createdAt'> & {
  created_at: string
}
