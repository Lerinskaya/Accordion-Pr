import React from 'react'

const TableHead = () => {
  return (
    <div className='table__header table__item'>
      <p className='item item-1'>Дата</p>
      <p className='item item-2'>Шифр задачи</p>
      <p className='item item-3'>Шифр проекта</p>
      <p className='item item-4'>Задача</p>
      <p className='item item-5'>Статус</p>
      <p className='item item-6'>Ответственный</p>
      <p className='item item-7'>Переназначить</p>
      <p className='item item-8'>Приоритет</p>
      <p className='item item-9'>Комментарий</p>
      <p className='item item-10'>План время</p>
      <p className='item item-11'>Факт время</p>
      <p className='item item-12'>Начал</p>
      <p className='item item-13'>Завершил</p>
    </div>
  )
}

export default TableHead