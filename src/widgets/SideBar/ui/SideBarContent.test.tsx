import { render } from '@testing-library/react'

import { SideBar } from 'widgets/SideBar'

describe('SideBarContent', () => {
  test('should have className "SideBarContent"', () => {
    const { container } = render(<SideBar />)
    expect(container.querySelector('.SideBarContent')).toBeInTheDocument()
  })

  test('pass endCellRender -> should appear element', async () => {
    const { findByText } = render(<SideBar endCellRender={<span>Hello world</span>} />)
    const element = await findByText(/Hello world/i)
    expect(element).not.toBeInTheDocument()
  })
})
