import { render, screen } from '@testing-library/react'
import { UIProvider } from 'src/context/ui'
import HomePage from '../pages'


describe('When the component Home is mounted', () => {
  test('ddfdfdf', () => {
    render(
      
        <HomePage />
      
    )
    //header openjira
    expect(screen.getByText(/jira/i)).toBeInTheDocument();
    //Menu Burger
    expect(screen.queryByTestId(/menuicon/i)).toBeInTheDocument();

    //expect(screen.queryByText(/menu/i)).toBeInTheDocument()
  })
})
