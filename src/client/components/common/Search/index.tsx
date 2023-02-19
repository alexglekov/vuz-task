import React, { useEffect } from 'react'
import { useCharactersActions } from '../../../hooks/charactersActions'
import { SearchParams } from '../../../types/searchParams'
import Icon from '../Icon'
import css from './Search.module.scss'

const Search: React.FC<SearchParams> = ({
  inputValue,
  setSearchParamValue,
  filters,
}) => {
  const {
    filterCharactersByNameAndTag,
    filterCharactersByTagAfterFilterCharactersByNameAndTag,
  } = useCharactersActions()

  useEffect(() => {
    filterCharactersByNameAndTag(inputValue)
    if (filters.length > 0) {
      filterCharactersByTagAfterFilterCharactersByNameAndTag(filters)
    }
  }, [inputValue])

  return (
    <div className={css.wrapper}>
      <div className={css.line}></div>
      <div className={css.search}>
        <Icon type="searchInput" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setSearchParamValue(e.target.value)}
          placeholder="Search Characters..."
        />
      </div>
    </div>
  )
}

export default Search
