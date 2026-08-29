export interface EventItem {
  day: string;
  time: string;
  title: string;
  type: 'Canlı Müzik' | 'DJ Set' | 'Özel';
  desc: string;
}

export const events: EventItem[] = [
  {
    day: 'Perşembe',
    time: '19:00 — 22:00',
    title: 'Sunset Sessions',
    type: 'Canlı Müzik',
    desc: 'Akustik gitar & caz trio, havuz kenarında gün batımı seti.',
  },
  {
    day: 'Cuma',
    time: '20:00 — 23:00',
    title: 'Zazi Live',
    type: 'Canlı Müzik',
    desc: 'Misafir sanatçılarla soul & funk performansı.',
  },
  {
    day: 'Cuma',
    time: '23:00 — 02:00',
    title: 'Körfez Nights',
    type: 'DJ Set',
    desc: 'Deep house & organik elektronik, konuk DJ rotasyonu.',
  },
  {
    day: 'Cumartesi',
    time: '13:00 — 18:00',
    title: 'Pool Day Beats',
    type: 'DJ Set',
    desc: 'Gündüz havuz partisi, chill-house selektörlük.',
  },
  {
    day: 'Cumartesi',
    time: '23:30 — 03:00',
    title: 'Zazizmir Night',
    type: 'DJ Set',
    desc: 'Ayın öne çıkan gecesi — özel konuk DJ ve görsel şov.',
  },
  {
    day: 'Pazar',
    time: '11:00 — 15:00',
    title: 'Havuz Başı Brunch',
    type: 'Özel',
    desc: 'Akustik müşayeret eşliğinde açık büfe brunch.',
  },
];
