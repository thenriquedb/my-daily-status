import { db } from '../../lib/firebase';
import getCurrentDate from '../../util/getCurrentDate';

export default async function (req, res) {
  const { filter = 'all', radius = 1000, latitude, longitude } = req.query;

  let nearbyUsers;
  const currentDate = getCurrentDate();
  console.log(latitude, currentDate, longitude, filter, radius);

  switch (filter.toLowerCase()) {
    case 'covid':
    case 'suspect':
      nearbyUsers = await db
        .collection('history')
        .doc(currentDate)
        .collection('all')
        .where('status', '==', filter)
        .near({
          center: {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          },
          radius: parseFloat(radius) * 1000,
        })
        .get();
      break;

    default:
      nearbyUsers = await db
        .collection('history')
        .doc(currentDate)
        .collection('all')
        .near({
          center: {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          },
          radius: parseFloat(radius) * 1000,
        })
        .get();
      break;
  }

  const nearbyUsersList = [];
  if (nearbyUsers.docs) {
    nearbyUsers.docs.forEach((doc) => {
      nearbyUsersList.push({
        id: doc.id,
        status: doc.data().status,
        coordinates: {
          latitude: doc.data().coordinates.latitude,
          longitude: doc.data().coordinates.longitude,
        },
      });
    });
  }
  console.log(nearbyUsersList);
  return res.status(200).json({
    nearbyUsers: nearbyUsersList,
  });
}
