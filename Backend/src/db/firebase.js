const admin = require('firebase-admin');

const serviceAccount = require('./el-booking-a4bd9-354428c3153d');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;