import axios from "axios";
const url = "http://localhost:5000/";
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