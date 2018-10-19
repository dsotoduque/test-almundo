import * as Actions from '../actions/ActionTypes'

const ServiceReducer = (state = {loading: false, error: undefined, data: [], action) => {
  switch (action.type) {
    case Actions.SERVICE_PENDING:
      return Object.assign({}, state, {
        loading: true
      })

    case Actions.SERVICE_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })

    case Actions.SERVICE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.data
      })

    default:
      return state
  }
}

export default ServiceReducer;
