import React, { useState } from 'react'
import css from './CharacterTableItem.module.scss'
import { Character } from '../../../types/character'
import cn from 'classnames'
import { Dispatch } from 'redux'
import noImagePlaceholder from '../../../assets/images/no-image-placeholder.png'

interface ICharacterTableItem {
  character: Character
  chosenCharaters: Character[]
  addCharacter: (character: Character) => (dispatch: Dispatch) => void
  removeCharacter: (character: Character) => (dispatch: Dispatch) => void
  style: React.CSSProperties
}

const CharacterTableItem: React.FC<ICharacterTableItem> = ({
  character,
  chosenCharaters,
  addCharacter,
  removeCharacter,
  style,
}) => {
  const [isChecked, setChecked] = useState<boolean>(
    !!chosenCharaters.find((ch) => ch.id === character.id)
  )

  return (
    <div
      className={cn(css.wrapper, isChecked && css.wrapperActive)}
      style={style}
    >
      <div className={css.character}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            if (isChecked) {
              removeCharacter(character)
              setChecked(false)
            } else {
              if (chosenCharaters.length <= 5) {
                addCharacter(character)
                setChecked(true)
              }
            }
          }}
        />
        {character.thumbnail ? (
          <img src={character.thumbnail} alt="character thumbnail" />
        ) : (
          <img src={noImagePlaceholder} alt="no thumbnail" />
        )}
        <div className={css.characterName}>
          {character.name.length <= 13
            ? character.name
            : character.name.slice(0, 13) + '...'}
        </div>
      </div>
      <div className={css.tags}>
        {character.tags &&
          character.tags.map((el) => {
            return (
              <div key={el.slot} className={css.tagsItem}>
                <div className={css.tagsItemName}>{el.tag_name}</div>
              </div>
            )
          })}
      </div>
      <div className={css.abilities}>
        {character.abilities &&
          character.abilities.map((el) => {
            return (
              <div
                key={el.abilityName}
                className={cn(
                  css.abilitiesValue,
                  el.abilityScore === 10 && css.red
                )}
              >
                {el.abilityScore}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default CharacterTableItem
