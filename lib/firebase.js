const admin = require('firebase-admin');
const { GeoFirestore } = require('geofirestore');
const serviceAccount = require('.json');

// Verifica se o app já foi iniciado
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://my-daily-status-168f7.firebaseio.com',
  });
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore);

module.exports = {
  db,
  admin,
};
