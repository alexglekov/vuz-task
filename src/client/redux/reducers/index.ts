import { combineReducers } from 'redux'
import { charactersReducer } from './characters'
import { chosenCharactersReducer } from './chosenCharacters'

export const rootReducer = combineReducers({
  characters: charactersReducer,
  chosenCharacters: chosenCharactersReducer,
})

export type RootState = ReturnType<typeof rootReducer>
