const influenzaSymptoms = [
  'Coriza',
  'Dor de garganta',
  'Dor de cabeça',
  'Espirro',
];

const covidSymptoms = [
  'Dificuldade de respirar',
  'Fadiga',
  'Febre',
  'Tosse',
  'Cansaço',
  'Diarreia',
];

export default function diagnostic(symptoms) {
  let contInfluenza = 0;
  let contCovid = 0;

  symptoms.forEach((symptom) => {
    if (covidSymptoms.includes(symptom)) {
      contCovid += 1;
    }

    if (influenzaSymptoms.includes(symptom)) {
      contInfluenza += 1;
    }
  });

  console.log(symptoms);
  console.log('gripe: ', contInfluenza);
  console.log('covid: ', contCovid);

  if (contInfluenza > contCovid) {
    return 'suspect';
  }

  if (contCovid > contInfluenza) {
    return 'covid';
  }

  return 'healthy';
}
