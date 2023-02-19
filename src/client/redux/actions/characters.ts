import { Dispatch } from 'redux'
import { CharacterActionTypes } from '../../types/characters'
import data from '../../../data/characters.json'
import { Character } from '../../types/character'

export const fetchCharacters = () => {
  return function (dispatch: Dispatch) {
    try {
      dispatch({
        type: CharacterActionTypes.FETCH_CHARACTERS,
        payload: JSON.parse(JSON.stringify(data)),
      })
    } catch {
      console.log('Something went wrong...')
    }
  }
}

export const setMyTeamCharacters = (characters: Character[]) => {
  return function (dispatch: Dispatch) {
    try {
      dispatch({
        type: CharacterActionTypes.SET_MY_TEAM_CHARACTERS,
        payload: characters,
      })
    } catch {
      console.log('Something went wrong...')
    }
  }
}

export const filterCharactersByNameAndTag = (searchString: string) => {
  return function (dispatch: Dispatch) {
    try {
      dispatch({
        type: CharacterActionTypes.FILTER_CHARACTERS_BY_NAME_AND_TAG,
        payload: searchString,
      })
    } catch {
      console.log('Something went wrong...')
    }
  }
}

export const filterCharactersByNameAndTagAfterFilterCharactersByTag = (
  searchString: string
) => {
  return function (dispatch: Dispatch) {
    try {
      dispatch({
        type: CharacterActionTypes.FILTER_CHARACTERS_BY_NAME_AND_TAG_AFTER_FILTER_CHARACTERS_BY_TAG,
        payload: searchString,
      })
    } catch {
      console.log('Something went wrong...')
    }
  }
}

export const filterCharactersByTag = (tags: string[]) => {
  return function (dispatch: Dispatch) {
    try {
      dispatch({
        type: CharacterActionTypes.FILTER_CHARACTERS_BY_TAG,
        payload: tags,
      })
    } catch (e) {
      console.log('Something went wrong...')
    }
  }
}

export const filterCharactersByTagAfterFilterCharactersByNameAndTag = (
  tags: string[]
) => {
  return function (dispatch: Dispatch) {
    try {
      dispatch({
        type: CharacterActionTypes.FILTER_CHARACTERS_BY_TAG_AFTER_FILTER_CHARACTERS_BY_NAME_AND_TAG,
        payload: tags,
      })
    } catch (e) {
      console.log('Something went wrong...')
    }
  }
}
