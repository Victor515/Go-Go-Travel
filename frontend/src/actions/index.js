import axios from 'axios';
import { FETCH_USER, FETCH_CARDS, FETCH_FOLLOWINGS, FETCH_FOLLOWERS, DELETE_CARDS  } from './actionTypes'

// const fetchUser = () => {
//   axios.get('/login')
// }

export const fetchUser = () => async dispatch => {
  //get the information of current user
  const res = await axios.get('/api/profile');

  dispatch({ type: FETCH_USER, payload: res.data });
};


export const submitCard = (values, history) => async dispatch => {
  const { card_name, address, day, money, picture, post_txt } = values;
  const addressList = address.split(",");
  console.log(addressList);
  const city_name = addressList[0];
  let Latitude = 0;
  let Longitude = 0;

  let count = 0;
  for(let elem of addressList){
    if(!isNaN(elem)){
      if(count == 0){
        Latitude = elem;
        count ++;
      }
      else if (count == 1){
        Longitude = elem;
        count ++;
      }
    }
  }

  const craftedValues = {
    card_name, city_name, Latitude, Longitude, day, money, picture, post_txt
  };


  const res = await axios.post('/api/cards', craftedValues);
  history.push('/profile');
  dispatch({ type: FETCH_USER, payload: res.data });
};


export const fetchCards = () => async dispatch => {
  const res = await axios.get('/api/cards');
  console.log("xxxxxxxxx");
  console.log(res);

  dispatch({ type: FETCH_CARDS, payload: res.data });
};


export const fetchFollowings= () => async dispatch => {
  const res = await axios.get('/api/followings');
  console.log(res);

  dispatch({ type: FETCH_FOLLOWINGS, payload: res.data });
};


export const deleteCards = (cardId, history) => async dispatch => {
    console.log("delete card");
    const cardIdObj = {"cardId": cardId};
    const res = await axios.post('/api/deletecards', cardIdObj);
    history.push('/profile');
    console.log(res);

  dispatch({ type: FETCH_CARDS, payload: res.data });
};
