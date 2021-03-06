import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const fbUrl = firebaseConfig.firebaseKeys.databaseURL;

const getWalks = () => new Promise((resolve, reject) => {
  axios.get(`${fbUrl}/walks.json`)
    .then((res) => {
      const walks = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        walks.push(res.data[fbKey]);
      });
      resolve(walks);
    })
    .catch(err => reject(err));
});

const deleteWalks = walkId => axios.delete(`${fbUrl}/walks/${walkId}.json`);

const addWalk = newWalks => axios.post(`${fbUrl}/walks.json`, newWalks);

export default { getWalks, deleteWalks, addWalk };
