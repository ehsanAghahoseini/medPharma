import {BASE_URL} from './BASE_URL';
import moment from 'moment';


function LoginAuth(e) {
  return fetch(`${BASE_URL}/auth/login` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'email':e.target[0].value ,
      'password':e.target[1].value ,
    }) 
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {LoginAuth};



function RegisterAuth(e) {
  return fetch(`${BASE_URL}/auth/register` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'artist':{
        "name":e.target[0].value ,
        "about":e.target[3].value ,
      } ,
      "admin":{
        'email':e.target[1].value ,
        'password':e.target[2].value ,
      }
    }) 
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {RegisterAuth};




function VerifyAuth(e) {
  return fetch(`${BASE_URL}/auth/validation` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "validation_type" : "email",
      "validation_text" : sessionStorage.getItem('veri_email'),
      "validation_code" : e.target[0].value ,
      "password":sessionStorage.getItem('veri_pas') ,
    }) 
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {VerifyAuth};




function ForgetPass(e) {
  return fetch(`${BASE_URL}/auth/forget_password` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "validation_type" : "email",
      "validation_text" : e.target[0].value,
    }) 
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {ForgetPass};



function VerifForgetPassword(e) {
  return fetch(`${BASE_URL}/auth/validation` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "validation_type" : "email",
      "validation_text" : sessionStorage.getItem('veri_email'),
      "validation_code" : e.target[0].value ,
    }) 
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {VerifForgetPassword};




function AuthResetPassword(e) {
  return fetch(`${BASE_URL}/auth/pass_rest` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "token" : sessionStorage.getItem('veri_token'),
      "password" : e.target[0].value ,
    }) 
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {AuthResetPassword};




function Get_Dashboard() {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/dashboard` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' ,
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Dashboard};



function Get_Users () {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/accessibility/users` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' ,
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Users};




function Add_User(e) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/accessibility/users` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: JSON.stringify({
      'email':e.target[0].value ,
      'name':e.target[1].value ,
      'password':e.target[2].value ,
      "role_id" : e.target[3].value ,
      "phone" : e.target[4].value ,
    }) 
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Add_User};




function Delete_User(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/accessibility/users/${id}` , {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Delete_User};



function Get_Single_Users(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/accessibility/users/${id}` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Single_Users};




function Edit_User(id , name , email , phone , role) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/accessibility/users/${id}` , {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: JSON.stringify({
      'email':email ,
      'name':name ,
      "role_id" : role,
      "phone" : phone ,
    })
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Edit_User};



function Add_Role(listid , e) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/accessibility` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: JSON.stringify({
      'name':e.target[0].value ,
      'permissions':listid
    })
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Add_Role};





function Get_Roles() {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/accessibility` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Roles};




function Delete_Roles(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/accessibility/${id}` , {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Delete_Roles};




function Change_Available(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/accessibility/users/${id}/update_available` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Change_Available};




function Get_Category_Album() {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/categories` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Category_Album};





function Get_Gender_Album() {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/genders` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Gender_Album};




function Get_All_Artists() {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/artists` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_All_Artists};




function Add_Album_One(values) {
  let postData = {
    "album" : {
     "name" : values.name,
     "cover_producer":  values.cover_producer,
     "gender_id" :  values.gender,
     "release_time" :  moment(values.release_time._d).format('YYYY-MM-DD hh:mm') ,
    },
     "categories_id" : values.category,
  }
  if(values.pay){
    postData['price_rial'] = values.Rial_price ;
    postData['price_dollar'] = values.Dollar_price ;
    postData['vip'] = values.vip ;

  }
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums` , {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Add_Album_One};




function Add_Album_Two(albumId , profileImage ) {
  var formdata = new FormData();
  formdata.append("image", profileImage[0].originFileObj);
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}/cover` , {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      // "Content-type": "multipart/form-data" ,
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Add_Album_Two};




function Add_Album_three(albumId ,values , albumPay , typeAlbum , fileMusic , duration) {
  var formdata = new FormData();
  var postData = {}
  if(typeAlbum == 'album'){
    postData = {
      "name" : values.name,
      "lyric" : values.lyric,
      "producer" : values.producer,
      "music_producer" : values.music_producer,
      "duration" : duration,
    }
    if(albumPay){
      postData['price_rial'] = values.Rial_price ;
      postData['price_dollar'] = values.Dollar_price ;
      postData['vip'] = values.vip ;
    }
  }
  else {
    postData = {
      "lyric" : values.lyric,
      "producer" : values.producer,
      "music_producer" : values.music_producer,
      "duration" : duration,
    }
  }
  if(values.isFeats){
    formdata.append("feats", JSON.stringify(values.feats));
  }
  formdata.append("audio", fileMusic);
  formdata.append("type", typeAlbum);
  formdata.append("track" ,JSON.stringify(postData))

  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}/tracks` , {
    method: 'POST',
    headers: {
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Add_Album_three};




function Get_Album(albumId) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}/single` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Album};




function Get_Album_Comment(albumId , current) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}/likes?page=${current}` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Album_Comment};




function Get_Track(albumId) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}/tracks` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Track};




function Get_Track_Comments(albumId , trackID , current) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}/tracks/${trackID}/comments?page=${current}` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Track_Comments};



function Get_Track_Likes(albumId , trackID , current) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}/tracks/${trackID}/likes?page=${current}` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Track_Likes};


function Get_All_Album(currentPage) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/?page=${currentPage}` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_All_Album};






function Get_Cover_Image(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${id}/cover` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.blob())
    .then((res) => {
      return URL.createObjectURL(res); ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Cover_Image};




function Get_User_Cover_Image(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/accessibility/users/${id}/avatar` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.blob())
    .then((res) => {
      return URL.createObjectURL(res); ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_User_Cover_Image};



function Update_Cover_User(id , profileImage ) {
  var formdata = new FormData();
  formdata.append("image", profileImage[0].originFileObj);
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/accessibility/users/${id}/avatar` , {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      // "Content-type": "multipart/form-data" ,
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Update_Cover_User};




function Get_All_Track(current) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/tracks?page=${current}` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_All_Track};





function Edit_Track(albumId ,trackId , name , lyric , producer , musicProducer) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}/tracks/${trackId}` , {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: JSON.stringify({
      'name':name ,
      "lyric" :lyric,
      "producer" : producer,
      "music_producer" : musicProducer,
    })
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Edit_Track};




function Update_Track_Audio(albumId , trackId ,duration , audio ) {
  var formdata = new FormData();
  formdata.append("audio", audio);
  formdata.append("duration", duration);
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}/tracks/${trackId}/audio` , {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      // "Content-type": "multipart/form-data" ,
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Update_Track_Audio};




function Add_Track_Audio(albumId ,duration , fileMusic , e) {
  console.log(e.target[0].value);
  var postData = {
    "name" : e.target[0].value,
    "lyric" : e.target[1].value,
    "producer" : e.target[2].value,
    "music_producer" : e.target[3].value,
    "duration" : duration,
  }
  var formdata = new FormData();
  formdata.append("audio", fileMusic);
  formdata.append("type", 'album');
  formdata.append("track" ,JSON.stringify(postData))
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}/tracks` , {
    method: 'POST',
    headers: {
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Add_Track_Audio};




function Delete_Track(albumId ,trackId) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}/tracks/${trackId}` , {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Delete_Track};





function Delete_Album(albumId) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${albumId}` , {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Delete_Album};



function Update_Cover_Album(id , cover ) {
  var formdata = new FormData();
  formdata.append("image", cover[0].originFileObj);
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/albums/${id}/cover` , {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      // "Content-type": "multipart/form-data" ,
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Update_Cover_Album};



function Add_Music_Video(values , cover , music) {
  var formdata = new FormData();
  if(values.isFeats){
    formdata.append("feats", JSON.stringify(values.feats));
  }
  if(values.pay){
    formdata.append("price_rial", values.Rial_price);
    formdata.append("price_dollar", values.Dollar_price);
    formdata.append("vip", values.vip);
  }
  formdata.append("name", values.name);
  formdata.append("director", values.director);
  formdata.append("release_time", moment(values.release_time._d).format('YYYY-MM-DD hh:mm'));
  formdata.append("cover", cover[0].originFileObj);
  formdata.append("video", music);
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/music_videos` , {
    method: 'POST',
    headers: {
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Add_Music_Video};



function Get_All_Music_Video() {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/music_videos` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_All_Music_Video};




function Get_Music_Video_Detail(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/music_videos/${id}` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Music_Video_Detail};



function Delete_Music_Video(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/music_videos/${id}` , {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Delete_Music_Video};




function Get_Music_Video_Cover_Image(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/music_videos/${id}/cover` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.blob())
    .then((res) => {
      return URL.createObjectURL(res); ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Music_Video_Cover_Image};






function Update_Cover_Music_Video(id , cover ) {
  var formdata = new FormData();
  formdata.append("cover", cover[0].originFileObj);
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/music_videos/${id}/cover` , {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      // "Content-type": "multipart/form-data" ,
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Update_Cover_Music_Video};



function Get_Music_Video_File_Video(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/music_videos/${id}/video` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.blob())
    .then((res) => {
      return URL.createObjectURL(res) ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Music_Video_File_Video};





function Update_Music_Video(id , musicvideo ) {
  var formdata = new FormData();
  formdata.append("video", musicvideo);
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/music_videos/${id}/video` , {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      // "Content-type": "multipart/form-data" ,
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Update_Music_Video};





function Add_Podcast(values , cover , podcast , duration) {
  var formdata = new FormData();
  if(values.isFeats){
    formdata.append("feats", JSON.stringify(values.feats));
  }
  if(values.pay){
    formdata.append("price_rial", values.Rial_price);
    formdata.append("price_dollar", values.Dollar_price);
    formdata.append("vip", values.vip);
  }
  formdata.append("name", values.name);
  formdata.append("categories_id", values.category);
  formdata.append("gender_id", values.gender);
  formdata.append("duration", duration);
  formdata.append("producer", values.producer);
  formdata.append("cover_producer", values.cover_producer);
  formdata.append("release_time", moment(values.release_time._d).format('YYYY-MM-DD hh:mm'));
  formdata.append("cover", cover[0].originFileObj);
  formdata.append("audio", podcast);
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/podcasts` , {
    method: 'POST',
    headers: {
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Add_Podcast};




function Get_All_Podcast() {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/podcasts` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_All_Podcast};




function Get_Podcast_Cover_Image(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/podcasts/${id}/cover` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.blob())
    .then((res) => {
      return URL.createObjectURL(res); ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Podcast_Cover_Image};





function Get_Podcast_Detail(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/podcasts/${id}` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Get_Podcast_Detail};




function Delete_Podcast(id) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/podcasts/${id}` , {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Delete_Podcast};




function Update_Cover_Podcast(id , cover ) {
  var formdata = new FormData();
  formdata.append("cover", cover[0].originFileObj);
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/podcasts/${id}/cover` , {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      // "Content-type": "multipart/form-data" ,
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Update_Cover_Podcast};




function Update_Podcast(id , podcast ) {
  var formdata = new FormData();
  formdata.append("audio", podcast);
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/podcasts/${id}/audio` , {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      // "Content-type": "multipart/form-data" ,
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    body: formdata ,
    })
    .then(res => res.json())
    .then((res) => {
      return res ;
    })
    .catch((er)=>{
      return er ;
    })
}
export {Update_Podcast};



function Play_Podcast(PodcastId) {
  return fetch(`${BASE_URL}/artists/${JSON.parse(localStorage.getItem('userInfo')).id}/podcasts/${PodcastId}/audio` , {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token':JSON.parse(localStorage.getItem('userInfo')).token ,
    },
    })
    .then(res => res.blob())
    .then((res) => {
      return URL.createObjectURL(res); 
    })
    .catch((er)=>{
      return er ;
    })
}
export {Play_Podcast};