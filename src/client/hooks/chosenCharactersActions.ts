import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as chosenCharactersActionCreators from '../redux/actions/chosenCharacters'

export const useChosenCharactersActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(chosenCharactersActionCreators, dispatch)
}
