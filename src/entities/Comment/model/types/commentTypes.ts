import { type ProfileResponseType } from 'entities/Profile'

export interface ICommentResponse {
  id: number
  created_at: string
  profileId: number
  profile: ProfileResponseType
  articleId: number
  text: string
}

export interface ICommentClient {
  id: number
  createdAt: string
  profileId: number
  author: ProfileResponseType
  articleId: number
  text: string
}
