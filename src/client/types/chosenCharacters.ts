import { Character } from './character'

export interface ChosenCharactersState {
  characters: Character[] | []
}

export enum ChosenCharactersActionTypes {
  ADD_CHARACTER = 'ADD_CHARACTER',
  REMOVE_CHARACTER = 'REMOVE_CHARACTER',
}

interface AddCharacter {
  type: ChosenCharactersActionTypes.ADD_CHARACTER
  payload: Character
}

interface RemoveCharacter {
  type: ChosenCharactersActionTypes.REMOVE_CHARACTER
  payload: Character
}

export type ChosenCharactersActions = AddCharacter | RemoveCharacter
