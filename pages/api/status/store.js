import { db, admin } from '../../../lib/firebase';
import auth0 from '../../../lib/auth0';
import getCurrentDate from '../../../util/getCurrentDate';

export default async function store(req, res) {
  const { status } = req.body;
  const { latitude, longitude } = req.body.coords;

  const session = await auth0.getSession(req);

  if (!session) return res.status(401).json({ error: 'Unauthenticated user' });

  const currentDate = getCurrentDate();

  const { sub: userId } = session.user;

  await db
    .collection('markers')
    .doc(currentDate)
    .collection('checks')
    .doc(userId)
    .set({
      status,
      userId,
      coordinates: new admin.firestore.GeoPoint(latitude, longitude),
    });

  return res.send({ ok: true });
}
