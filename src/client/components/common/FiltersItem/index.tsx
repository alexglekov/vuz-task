import React, { Dispatch, SetStateAction } from 'react'
import css from './FiltersItem.module.scss'
import cn from 'classnames'

interface IFiltersItem {
  name: string
  filters: string[]
  setFilters: Dispatch<SetStateAction<string[]>>
}

const FiltersItem: React.FC<IFiltersItem> = ({ name, filters, setFilters }) => {
  return (
    <button
      className={cn(
        filters.includes(name.toLowerCase()) ? css.wrapperActive : css.wrapper
      )}
      onClick={() => {
        if (!filters.includes(name.toLowerCase())) {
          setFilters([...filters, name.toLowerCase()])
        } else {
          setFilters(filters.filter((el) => el !== name.toLowerCase()))
        }
      }}
    >
      {filters.includes(name.toLowerCase()) && (
        <div className={css.tick}>
          <span className={css.leftArrow}></span>
          <span className={css.rightArrow}></span>
        </div>
      )}
      <div className={css.name}>{name}</div>
    </button>
  )
}

export default FiltersItem
