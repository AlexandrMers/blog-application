import {
  type ICommentClient,
  type ICommentResponse,
} from '../types/commentTypes'

export const mapResponseCommentToClient = ({
  id,
  profile,
  profileId,
  text,
  articleId,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at,
}: ICommentResponse): ICommentClient => ({
  articleId,
  id,
  author: profile,
  profileId,
  text,
  createdAt: created_at,
})
