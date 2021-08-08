import { render, screen } from '@testing-library/react'

import { List } from './'

const correctData = ['html', 'css', 'js']

const renderListWithData = () => {
  return render(<List items={correctData} />)
}
const renderListWithoutData = () => {
  return render(<List />)
}

describe('List component', () => {
  it('List renders with data', () => {
    renderListWithData()

    expect(screen.getByRole('list')).toBeInTheDocument()
    correctData.forEach((el) => {
      expect(screen.getByText(el)).toBeInTheDocument()
    })
  })

  it('List renders without data', () => {
    renderListWithoutData()

    expect(screen.getByText('Данные отсутствуют')).toBeInTheDocument()
  })

  it('List snapshot', () => {
    const list = renderListWithData()
    expect(list).toMatchSnapshot()
  })
  it('List empty snapshot', () => {
    const list = renderListWithoutData()
    expect(list).toMatchSnapshot()
  })
})
