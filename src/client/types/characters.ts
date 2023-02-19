import { Character } from './character'

export interface CharactersState {
  characters: Character[]
  __characters: Character[]
}

export enum CharacterActionTypes {
  FETCH_CHARACTERS = 'FETCH_CHARACTERS',
  SET_MY_TEAM_CHARACTERS = 'SET_MY_TEAM_CHARACTERS',
  FILTER_CHARACTERS_BY_TAG = 'FILTER_CHARACTERS_BY_TAG',
  FILTER_CHARACTERS_BY_NAME_AND_TAG = 'FILTER_CHARACTERS_BY_NAME_AND_TAG',
  FILTER_CHARACTERS_BY_NAME_AND_TAG_AFTER_FILTER_CHARACTERS_BY_TAG = 'FILTER_CHARACTERS_BY_AFTER_FILTER_CHARACTERS_BY_TAG',
  FILTER_CHARACTERS_BY_TAG_AFTER_FILTER_CHARACTERS_BY_NAME_AND_TAG = 'FILTER_CHARACTERS_BY_TAG_AFTER_FILTER_CHARACTERS_BY_NAME_AND_TAG',
}

interface FetchCharacters {
  type: CharacterActionTypes.FETCH_CHARACTERS
  payload: Character[]
}

interface SetMyTeamCharacters {
  type: CharacterActionTypes.SET_MY_TEAM_CHARACTERS
  payload: Character[]
}

interface FilterCharactersByTag {
  type: CharacterActionTypes.FILTER_CHARACTERS_BY_TAG
  payload: string[]
}
interface FilterCharactersByTagAfterFilterCharactersByNameAndTag {
  type: CharacterActionTypes.FILTER_CHARACTERS_BY_TAG_AFTER_FILTER_CHARACTERS_BY_NAME_AND_TAG
  payload: string[]
}

interface FilterCharactersByNameAndTag {
  type: CharacterActionTypes.FILTER_CHARACTERS_BY_NAME_AND_TAG
  payload: string
}

interface FilterCharactersByNameAndTagAfterFilterCharactersByTag {
  type: CharacterActionTypes.FILTER_CHARACTERS_BY_NAME_AND_TAG_AFTER_FILTER_CHARACTERS_BY_TAG
  payload: string
}

export type CharactersActions =
  | FetchCharacters
  | SetMyTeamCharacters
  | FilterCharactersByTag
  | FilterCharactersByTagAfterFilterCharactersByNameAndTag
  | FilterCharactersByNameAndTag
  | FilterCharactersByNameAndTagAfterFilterCharactersByTag
