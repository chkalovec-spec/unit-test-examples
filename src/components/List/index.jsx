import React from 'react'

export const List = (props) => {
  const { items = [] } = props

  if (!items.length) return <div>Данные отсутствуют</div>

  return (
    <ul>
      {items.map((el) => {
        return <li key={el}>{el}</li>
      })}
    </ul>
  )
}
