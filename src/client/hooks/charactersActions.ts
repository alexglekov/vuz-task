import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CharactersActionCreators from '../redux/actions/characters'

export const useCharactersActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(CharactersActionCreators, dispatch)
}
