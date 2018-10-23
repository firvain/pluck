
import * as firebase from 'firebase';
import config from '../config/firebase-config';

console.log(config);
firebase.initializeApp(config);

export default firebase;
