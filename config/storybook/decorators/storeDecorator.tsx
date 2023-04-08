import { StoreProvider } from 'app/providers/store'

export const StoreDecorator = (story: any) => {
  return <StoreProvider>{story()} </StoreProvider>
}
