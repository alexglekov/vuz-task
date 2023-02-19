import {
  ChosenCharactersActions,
  ChosenCharactersActionTypes,
  ChosenCharactersState,
} from '../../types/chosenCharacters'

const initialState: ChosenCharactersState = {
  characters: [],
}

export const chosenCharactersReducer = (
  state = initialState,
  action: ChosenCharactersActions
): ChosenCharactersState => {
  switch (action.type) {
    case ChosenCharactersActionTypes.ADD_CHARACTER:
      return { ...state, characters: [...state.characters, action.payload] }
    case ChosenCharactersActionTypes.REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (el) => el.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}
