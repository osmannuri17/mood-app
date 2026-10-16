export interface EventItem {
  date: string;
  day: string;
  title: string;
  subtitle?: string;
  type: 'Canlı Müzik' | 'Akustik' | 'DJ Set' | 'Akşam Yemeği' | 'Kahvaltı';
  dinner?: string;
  music?: string;
  desc?: string;
}

export const programWeek = '12 — 18 Ekim';

export const reservationPhone = '0533 668 99 29';

const quietEvening =
  'Günü sakin bir sofrada, lezzetli yemekler ve güzel sohbetlerle tamamlamak isteyenlere...';

export const events: EventItem[] = [
  {
    date: '12.10',
    day: 'Pazartesi',
    title: 'Sakin Akşam Sofrası',
    type: 'Akşam Yemeği',
    desc: quietEvening,
  },
  {
    date: '13.10',
    day: 'Salı',
    title: 'Sakin Akşam Sofrası',
    type: 'Akşam Yemeği',
    desc: quietEvening,
  },
  {
    date: '14.10',
    day: 'Çarşamba',
    title: 'UnderCover Orkestrası',
    subtitle: 'Canlı Müzik',
    type: 'Canlı Müzik',
    dinner: '20:00',
    music: '21:00',
  },
  {
    date: '15.10',
    day: 'Perşembe',
    title: 'Burak Toktamış',
    subtitle: 'Akustik Şarkılar',
    type: 'Akustik',
    dinner: '20:00',
    music: '21:00',
  },
  {
    date: '16.10',
    day: 'Cuma',
    title: 'Sedat Yüce',
    subtitle: 'Canlı Müzik',
    type: 'Canlı Müzik',
    dinner: '20:00',
    music: '21:00',
  },
  {
    date: '17.10',
    day: 'Cumartesi',
    title: 'DJ Avni Emektar',
    subtitle: 'Perküsyon Sabri Oskay',
    type: 'DJ Set',
    dinner: '20:00',
    music: '21:00',
  },
  {
    date: '18.10',
    day: 'Pazar',
    title: 'Pazar Kahvaltısı',
    subtitle: 'Pazar Keyfi',
    type: 'Kahvaltı',
  },
];
