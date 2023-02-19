import { Dispatch } from 'redux'
import { Character } from '../../types/character'
import { ChosenCharactersActionTypes } from '../../types/chosenCharacters'

export const addCharacter = (character: Character) => {
  return function (dispatch: Dispatch) {
    try {
      dispatch({
        type: ChosenCharactersActionTypes.ADD_CHARACTER,
        payload: character,
      })
    } catch {
      console.log('Something went wrong')
    }
  }
}

export const removeCharacter = (character: Character) => {
  return function (dispatch: Dispatch) {
    try {
      dispatch({
        type: ChosenCharactersActionTypes.REMOVE_CHARACTER,
        payload: character,
      })
    } catch {
      console.log('Something went wrong')
    }
  }
}
