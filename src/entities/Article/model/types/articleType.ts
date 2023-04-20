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

export type IBlockType = IBlockText | IBlockCode | IBlockImage

export interface IArticleClient {
  id: number
  title: string
  subtitle: string
  img: string
  createdAt: string
  type: string[]
  blocks: IBlockType[]
}

export type IArticleResponse = Omit<IArticleClient, 'createdAt'> & {
  created_at: string
}
