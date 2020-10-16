import axios from 'axios';


export function callGet(url) { 
    axios.get(url)
    .then(res => {
      return res
    })
    .catch(err => { 
        return err
    })
}

