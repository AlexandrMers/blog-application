import { getAuthData } from './getAuthData'

describe('getAuthData', () => {
  test('partial state with isLoading=false, error=null, authData=undefined -> equal object', () => {
    const AUTH_DATA = {
      isLoading: false,
      error: undefined,
      authData: undefined,
    }

    const state = {
      auth: AUTH_DATA,
    }

    expect(getAuthData(state as StoreSchema)).toEqual(AUTH_DATA)
  })

  test('partial state with isLoading=true, error=null, authData=undefined -> equal object', () => {
    const AUTH_DATA = {
      isLoading: true,
      error: null,
      authData: undefined,
    }

    const state = {
      auth: AUTH_DATA,
    }

    expect(getAuthData(state as StoreSchema)).toEqual(AUTH_DATA)
  })

  test('partial state with isLoading=true, error=null, authData=undefined -> equal object', () => {
    const AUTH_DATA: StoreSchema['auth'] = {
      isLoading: true,
      error: null,
      authData: {
        email: 'example@mail.com',
        token: 'fsdfsdfsdfsdf',
        id: 1,
      },
    }

    const state = {
      auth: AUTH_DATA,
    }

    expect(getAuthData(state as StoreSchema)).toEqual(AUTH_DATA)
  })
})
