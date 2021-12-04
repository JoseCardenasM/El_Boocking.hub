import axios from "axios";
const url = "https://bookingas.herokuapp.com/";
const booking = "El_Boocking.hub"

export function getCrudBookings(callback){
  axios.get(url + booking)
  .then((res)=> {
    callback(res);
  })
  .catch((err)=>{
    console.log(err);
  })
}