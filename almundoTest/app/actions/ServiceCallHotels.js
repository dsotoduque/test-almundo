import * as ActionTypes from './ActionTypes';
import {connect} from 'react-redux';
import axios from 'react-native-axios';
import ServiceComponent from '../components/ServiceComponent';

const URL = 'http:localhost/hotels';

const stateToProps = (state) => ({
  loading: state.serviceReducer.loading,
  error: state.serviceReducer.error,
  data: state.serviceReducer.data
});

const dispatchToProps = (dispatch) => ({
  getHotels: () => dispatch(getHotelList())
});

export const getHotelList = () => {
  return dispatch => {
    dispatch(getPendingService())
    axios.get(`${URL}/hotels`)
    .then(response => {
      dispatch(serviceSuccess(response.data))
    })
    .catch(error => {
      dispatch(serviceError(error))
    });
  }
}

export const serviceError = (error) => ({
  type: ActionTypes.SERVICE_ERROR,
  error: error
})

export const getPendingService = () => ({
  type: ActionTypes.SERVICE_PENDING
})

export const serviceSuccess = () => ({
  type: ActionTypes.SERVICE_SUCCESS,
  data: data
})

export default connect(stateToProps,dispatchToProps,ServiceComponent);
