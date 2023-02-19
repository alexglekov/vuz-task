import React, { useEffect, useState } from 'react'
import css from './MyTeamButton.module.scss'
import cn from 'classnames'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useCharactersActions } from '../../../../hooks/charactersActions'

const MyTeamButton: React.FC = () => {
  const { characters } = useTypedSelector((state) => state.chosenCharacters)
  const { setMyTeamCharacters, fetchCharacters } = useCharactersActions()
  const [isButtonActive, setButtonActive] = useState<boolean>(false)

  useEffect(() => {
    if (isButtonActive) {
      setMyTeamCharacters(characters)
    } else {
      fetchCharacters()
    }
  }, [isButtonActive])

  return (
    <button
      className={cn(isButtonActive ? css.wrapperActive : css.wrapper)}
      onClick={() => setButtonActive((prev) => !prev)}
    >
      {isButtonActive && (
        <div className={css.tick}>
          <span className={css.leftArrow}></span>
          <span className={css.rightArrow}></span>
        </div>
      )}
      <div className={css.name}>My Team</div>
    </button>
  )
}

export default MyTeamButton
