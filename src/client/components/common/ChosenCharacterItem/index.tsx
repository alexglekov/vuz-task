import React, { useState } from 'react'
import { useChosenCharactersActions } from '../../../hooks/chosenCharactersActions'
import { Character } from '../../../types/character'
import css from './ChosenCharacterItem.module.scss'
import noImagePlaceholder from '../../../assets/images/no-image-placeholder.png'

interface IChosenCharacterItem {
  character: Character
}

const ChosenCharacterItem: React.FC<IChosenCharacterItem> = ({ character }) => {
  const [isRemoveCharacterOverlayVisible, setRemoveCharacterOverlayVisible] =
    useState<boolean>(false)
  const { removeCharacter } = useChosenCharactersActions()
  return (
    <div className={css.wrapper}>
      <div
        key={character.id}
        className={css.characterItem}
        onMouseEnter={() => setRemoveCharacterOverlayVisible(true)}
        onMouseLeave={() => setRemoveCharacterOverlayVisible(false)}
      >
        {character.image ? (
          <img src={character.image} alt="champion avatar" />
        ) : (
          <img src={noImagePlaceholder} alt="champion avatar" />
        )}
        {isRemoveCharacterOverlayVisible && (
          <button
            onClick={() => {
              removeCharacter(character)
              setRemoveCharacterOverlayVisible(false)
            }}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  )
}

export default ChosenCharacterItem
