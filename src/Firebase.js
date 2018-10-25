
import * as firebase from 'firebase';
import config from '../config/firebase-config';

alert('config');
firebase.initializeApp(config);

export default firebase;
