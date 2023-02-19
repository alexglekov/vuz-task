import React, { useEffect } from 'react'
import css from './Filters.module.scss'
import { filtersNames } from '../../../utils/FiltersNames/filtersnames'
import FiltersItem from '../FiltersItem'
import { useCharactersActions } from '../../../hooks/charactersActions'
import { SearchParams } from '../../../types/searchParams'
import MyTeamButton from '../Buttons/MyTeamButton'

const Filters: React.FC<SearchParams> = ({
  filters,
  setSearchParamValue,
  inputValue,
}) => {
  const {
    filterCharactersByTag,
    filterCharactersByNameAndTagAfterFilterCharactersByTag,
  } = useCharactersActions()

  useEffect(() => {
    filterCharactersByTag(filters)
    if (inputValue.length !== 0) {
      filterCharactersByNameAndTagAfterFilterCharactersByTag(inputValue)
    }
  }, [filters])

  return (
    <div className={css.wrapper}>
      {filtersNames.map((el) => {
        return (
          <FiltersItem
            key={el}
            name={el}
            filters={filters}
            setFilters={setSearchParamValue}
          />
        )
      })}
      <div className={css.MyTeamBtn}>
        <MyTeamButton />
      </div>
      <button className={css.clearBtn} onClick={() => setSearchParamValue([])}>
        Clear all
      </button>
    </div>
  )
}

export default Filters
