import React from 'react'
import { ListChildComponentProps } from 'react-window'
import { useChosenCharactersActions } from '../../../hooks/chosenCharactersActions'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Character } from '../../../types/character'
import CharacterTableItem from '../CharactersTableItem'

const Row: React.FC<ListChildComponentProps<Character[]>> = ({
  data,
  index,
  style,
}) => {
  const chosenCharacters = useTypedSelector(
    (state) => state.chosenCharacters.characters
  )
  const { addCharacter, removeCharacter } = useChosenCharactersActions()
  return (
    <CharacterTableItem
      character={data[index]}
      chosenCharaters={chosenCharacters}
      addCharacter={addCharacter}
      removeCharacter={removeCharacter}
      style={style}
    />
  )
}

export default Row
