import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { useAppSelector } from 'shared/hooks'
import { Spinner } from 'shared/ui'

import { articleModel } from 'entities/Article'

import { selectors } from 'features/AuthByLogin/model'

export const MyArticlesPage = () => {
  const { t } = useTranslation('my_articles_page')

  const auth = useAppSelector(selectors.getAuthData)
  const userId = auth.authData?.id as number

  const { data, isLoading } = articleModel.useGetArticlesByAuthorIdQuery(
    userId,
    {
      skip: !userId,
    }
  )

  return (
    <div>
      <Typography fontSize={24}>{t('title')}</Typography>

      {isLoading && <Spinner />}

      {!isLoading ? (
        !userId ? (
          <p>Необходимо авторизоваться</p>
        ) : (
          <ul>
            {data?.map((article) => (
              <li key={article.id}>{article.title}</li>
            ))}
          </ul>
        )
      ) : null}
    </div>
  )
}
