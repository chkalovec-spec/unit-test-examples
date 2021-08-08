import React from 'react'

export const Search = (props) => {
  const { value, onChange, placeholder = 'Search...' } = props

  return (
    <div>
      <label>
        Введите текст
        <input
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}
