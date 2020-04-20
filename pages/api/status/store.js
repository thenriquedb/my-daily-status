import { db, admin } from '../../../lib/firebase';
import auth0 from '../../../lib/auth0';
import getCurrentDate from '../../../util/getCurrentDate';

export default async function store(req, res) {
  const { symptoms } = req.body;
  const { latitude, longitude } = req.body.coords;

  const session = await auth0.getSession(req);

  if (!session) return res.status(401).json({ error: 'Unauthenticated user' });

  const currentDate = getCurrentDate();

  const { sub: userId } = session.user;

  await db
    .collection('users')
    .doc(userId)
    .collection('history')
    .doc(currentDate)
    .set({
      symptoms,
      status: 'covid',
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
      coordinates: new admin.firestore.GeoPoint(latitude, longitude),
      status: 'covid',
    });

  return res.status(200).end();
}
