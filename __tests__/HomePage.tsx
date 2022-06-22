import { render, screen } from '@testing-library/react'
import HomePage from '@/pages/index'

describe('When the component Home is mounted', async() => {
  test('ddfdfdf', () => {
    render(<HomePage />)
   /*  //header openjira
    expect(screen.getByText(/jira/i)).toBeInTheDocument();
    //Menu Burger
    expect(screen.queryByTestId(/menuicon/i)).toBeInTheDocument(); */

    //expect(screen.queryByText(/menu/i)).toBeInTheDocument()
  },3000)
})
