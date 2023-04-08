import { BrowserRouter } from 'react-router-dom'

export const RouteDecorator = (story: any) => {
  return <BrowserRouter>{story()}</BrowserRouter>
}
