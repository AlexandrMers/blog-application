import { type IProfile } from 'entities/Profile'

export interface IComment {
  id: number
  createdAt: string
  profileId: number
  profile: IProfile
  articleId: number
  text: string
}

export interface ICreateCommentQuery
  extends Omit<IComment, 'createdAt' | 'author' | 'id' | 'profile'> {}
