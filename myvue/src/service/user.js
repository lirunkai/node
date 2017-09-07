import axios from 'axios'

export class User {
  static getUser(){
    axios.get('/api/user')
      .then(r => {
        if(r.status == 200){
          return true;
        }
      })
  }
}
