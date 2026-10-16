// Placeholder concept menu for Zazizmir — dish names/prices are illustrative
// and meant to be finalized later. Categories intentionally mix registers
// (street-food playfulness next to fine-dining plating) to match the
// day-pool / night-stage duality of the venue.

export interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

export interface MenuCategory {
  key: string;
  label: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    key: 'gunun-ilki',
    label: 'Günün İlki',
    items: [
      { name: 'Karşıyaka Rüzgârı', desc: 'Deniz börülcesi, közlenmiş biber, tulum peyniri', price: '260₺' },
      { name: 'Zeytinyağlı Sirtaki', desc: 'Enginar, bakla, taze nane, limon kabuğu', price: '240₺' },
      { name: 'Körfez Ceviche', desc: 'Levrek, yeşil elma, kurutulmuş biber, turunç', price: '390₺' },
      { name: 'Sıcak Humus Zazi', desc: 'Tereyağlı nohut ezmesi, közlenmiş sarımsak, sumak', price: '210₺' },
    ],
  },
  {
    key: 'derin-sular',
    label: 'Derin Sular',
    items: [
      { name: 'Alsancak Işıkları Levrek', desc: 'Fesleğen yağı, kabak çiçeği, deniz tuzu kabuk', price: '520₺' },
      { name: 'Karides Zazi Tava', desc: 'Ouzo flambe, cherry domates, taze kekik', price: '480₺' },
      { name: 'Ahtapot Confit', desc: 'Kırmızı şarap sos, patates ezmesi, kapari', price: '560₺' },
    ],
  },
  {
    key: 'ana-sahne',
    label: 'Ana Sahne',
    items: [
      { name: 'Zazizmir Steak', desc: 'Odun ateşinde antrikot, közde sebze, biber sos', price: '690₺' },
      { name: 'Tavuk Şiş Bostanlı', desc: 'Yoğurtlu közlenmiş patlıcan, sumak soğan', price: '340₺' },
      { name: 'Ege Otlu Köfte', desc: 'Yedi ot karışımı, közlenmiş domates sos', price: '310₺' },
      { name: 'Deniz Mahsullü Risotto', desc: 'Safran, midye, karides, taze dereotu', price: '420₺' },
    ],
  },
  {
    key: 'imza-kokteyller',
    label: 'İmza Kokteyller',
    items: [
      { name: 'Gün Batımı #41', desc: 'Mastika, greyfurt, kızılcık, tütsülenmiş biber', price: '280₺' },
      { name: 'Bostanlı Sunset', desc: 'Mezcal, geçit portakalı, ateşte karamelize limon', price: '310₺' },
      { name: 'Zazi Spritz', desc: 'Prosecco, elderflower, nane, deniz tuzu', price: '260₺' },
      { name: 'Gece Yarısı Karşıyaka', desc: 'Rom, tütsülü vanilya, kahve tozu', price: '290₺' },
    ],
  },
  {
    key: 'gece-yarisi',
    label: 'Gece Yarısı Tatlıları',
    items: [
      { name: 'Karamelize İncir', desc: 'Keçi peyniri dondurması, bal, ceviz', price: '220₺' },
      { name: 'Zazi Baklava Deconstructed', desc: 'Fıstık kreması, tahin karamel', price: '240₺' },
      { name: 'Çikolata & Deniz Tuzu Fondan', desc: 'Sıcak servis, vanilyalı dondurma', price: '230₺' },
    ],
  },
];
