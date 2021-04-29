import { getState } from 'redux/core'
import { initialState as userInitialState } from 'redux/reducers/user'


const getReduxState = () => {
  const reduxState = getState()

  // Fix user store
  Object.keys(userInitialState).forEach((key) => {
    if (reduxState.user[key] === undefined) {
      reduxState.user[key] = userInitialState[key]
    }
  })

  return reduxState
}

export default getReduxState