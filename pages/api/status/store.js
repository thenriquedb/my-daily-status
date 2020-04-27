import { db, admin } from '../../../lib/firebase';
import getCurrentDate from '../../../util/getCurrentDate';

export default async function store(req, res) {
  const { symptoms = [], status, userId } = req.body;
  const { latitude, longitude } = req.body.coords;

  const currentDate = getCurrentDate();

  await db
    .collection('users')
    .doc(userId)
    .collection('history')
    .doc(currentDate)
    .set({
      symptoms,
      status,
      coordinates: {
        latitude,
        longitude,
      },
    });

  await db
    .collection('history')
    .doc(currentDate)
    .collection('all')
    .add({
      user: userId,
      symptoms,
      coordinates: new admin.firestore.GeoPoint(latitude, longitude),
      status,
    });

  return res.status(200).end();
}
