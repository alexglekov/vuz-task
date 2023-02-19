import {
  CharactersState,
  CharactersActions,
  CharacterActionTypes,
} from '../../types/characters'

const initialState: CharactersState = {
  characters: [],
  __characters: [],
}

export const charactersReducer = (
  state = initialState,
  action: CharactersActions
): CharactersState => {
  switch (action.type) {
    case CharacterActionTypes.FETCH_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        __characters: action.payload,
      }
    case CharacterActionTypes.SET_MY_TEAM_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        __characters: action.payload,
      }
    case CharacterActionTypes.FILTER_CHARACTERS_BY_TAG:
      if (action.payload) {
        return {
          ...state,
          __characters: state.characters.filter((character) => {
            if (character.tags) {
              return action.payload.every((el) =>
                character.tags.find((tag) => tag.tag_name === el)
              )
            }
          }),
        }
      }
      return state
    case CharacterActionTypes.FILTER_CHARACTERS_BY_TAG_AFTER_FILTER_CHARACTERS_BY_NAME_AND_TAG:
      if (action.payload) {
        return {
          ...state,
          __characters: state.__characters.filter((character) => {
            if (character.tags) {
              return action.payload.every((el) =>
                character.tags.find((tag) => tag.tag_name === el)
              )
            }
          }),
        }
      }
      return state
    case CharacterActionTypes.FILTER_CHARACTERS_BY_NAME_AND_TAG:
      return {
        ...state,
        __characters: state.characters.filter(
          (character) =>
            character.name
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            (character.tags &&
              character.tags.find(
                (tag) => tag.tag_name === action.payload.toLowerCase()
              ))
        ),
      }
    case CharacterActionTypes.FILTER_CHARACTERS_BY_NAME_AND_TAG_AFTER_FILTER_CHARACTERS_BY_TAG:
      return {
        ...state,
        __characters: state.__characters.filter(
          (character) =>
            character.name
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            (character.tags &&
              character.tags.find(
                (tag) => tag.tag_name === action.payload.toLowerCase()
              ))
        ),
      }
    default:
      return state
  }
}
