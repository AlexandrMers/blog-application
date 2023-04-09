import fetchMock from 'jest-fetch-mock'

import { createStore } from 'app/providers/store'

import { userModel } from 'entities/User'

import { initialState } from './AuthSlice'

beforeEach((): void => {
  fetchMock.resetMocks()
  fetchMock.enableMocks()
})

describe('AuthSlice', () => {
  test('должен вернуться initialState для auth', () => {
    const store = createStore()
    const authData = store.getState().auth
    expect(authData).toEqual(initialState)
  })

  test('вызвали эндпоинт login -> должен сработать http-запрос', async () => {
    const EMAIL = 'example@mail.com'
    const PASSWORD = '111111'

    const store = createStore()

    fetchMock.mockResponse(JSON.stringify({}))

    await store.dispatch(
      userModel.userSlice.endpoints.login.initiate({
        email: EMAIL,
        password: PASSWORD,
      })
    )
    expect(fetchMock).toBeCalledTimes(1)
  })

  test('вызвали эндпоинт login with success -> проставится authData', async () => {
    const EMAIL = 'example@mail.com'
    const PASSWORD = '111111'
    const FAKE_RESPONSE = {
      email: 'example@mail.com',
      id: 1,
      token: 'asld;alsd;l1',
    }

    const store = createStore()

    fetchMock.mockResponse(JSON.stringify(FAKE_RESPONSE))

    await store.dispatch(
      userModel.userSlice.endpoints.login.initiate({
        email: EMAIL,
        password: PASSWORD,
      })
    )
    const authData = store.getState().auth.authData
    expect(authData).toEqual(FAKE_RESPONSE)
  })

  test('неверные email или password -> в authData проставится ошибка', async () => {
    const EMAIL = 'example@mail.com'
    const PASSWORD = '111111'
    const FAKE_RESPONSE_ERROR = {
      status: 403,
      data: {
        message: 'user not found',
      },
    }

    const store = createStore()

    fetchMock.mockRejectedValue(JSON.stringify(FAKE_RESPONSE_ERROR))

    try {
      await store.dispatch(
        userModel.userSlice.endpoints.login.initiate({
          email: EMAIL,
          password: PASSWORD,
        })
      )
    } catch (e) {
      const auth = store.getState().auth
      expect(auth.error).toEqual(FAKE_RESPONSE_ERROR)
      expect(auth.error?.data.message).toEqual('user not found')
    }
  })
})
