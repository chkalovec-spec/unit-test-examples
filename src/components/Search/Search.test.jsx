import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Search } from './'

const onChange = jest.fn()


describe('Search component', () => {
  test('Search renders without custom placeholder', () => {
    render(<Search value='' onChange={onChange} />)

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })
  test('Search renders with custom placeholder', () => {
    render(<Search value='' onChange={onChange} placeholder='Найти'/>)

    expect(screen.getByPlaceholderText('Найти')).toBeInTheDocument()
  })
  test('onChange works', () => {
    render(<Search value='' onChange={onChange} placeholder='Найти'/>)

    const inputValue = 'React'
    userEvent.type(screen.getByRole('textbox'), inputValue)
    expect(onChange).toHaveBeenCalledTimes(inputValue.length)
  })
})
