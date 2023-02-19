import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { useCharactersActions } from '../../../hooks/charactersActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { countStats } from '../../../utils/CountStats/countStats'
import CharactersTable from '../CharactersTable'
import ChosenCharacterItem from '../ChosenCharacterItem'
import Filters from '../Filters'
import Search from '../Search'
import Statistics from '../Statistics'
import css from './Table.module.scss'

const Table: React.FC = () => {
  const { characters } = useTypedSelector((state) => state.chosenCharacters)
  const { fetchCharacters } = useCharactersActions()
  const [statistics, setStatistics] = useState<number[]>([])
  const [searchInputValue, setSearchInputValue] = useState<string>('')
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    fetchCharacters()
  }, [])

  useEffect(() => {
    setStatistics(() => countStats(characters))
  }, [characters])

  return (
    <div className={css.wrapper}>
      <div className={css.title}>
        {characters.length !== 0
          ? 'Your champions!'
          : 'Select your squad to defend earthrealm'}
      </div>
      {characters && (
        <div className={css.champions}>
          {characters.map((character) => {
            return (
              <ChosenCharacterItem
                key={character.id + v4()}
                character={character}
              />
            )
          })}
        </div>
      )}
      <Statistics statistics={statistics} />
      <Search
        inputValue={searchInputValue}
        setSearchParamValue={setSearchInputValue}
        filters={filters}
      />
      <Filters
        filters={filters}
        setSearchParamValue={setFilters}
        inputValue={searchInputValue}
      />
      <CharactersTable />
    </div>
  )
}

export default Table
