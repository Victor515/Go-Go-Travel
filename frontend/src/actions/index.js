import axios from 'axios';
import { FETCH_USER, FETCH_CARDS } from './actionTypes'

// const fetchUser = () => {
//   axios.get('/login')
// }

export const fetchUser = () => async dispatch => {
  //get the information of current user
  const res = await axios.get('/api/profile');

  dispatch({ type: FETCH_USER, payload: res.data });
};


export const submitCard = (values, history) => async dispatch => {
  const res = await axios.post('/api/cards', values);
  history.push('/profile');
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const fetchCards = () => async dispatch => {
  const res = await axios.get('/api/cards');
  console.log("xxxxxxxxx");
  console.log(res);

  dispatch({ type: FETCH_CARDS, payload: res.data });
};
