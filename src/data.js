// EDIT YOUR HOTEL CONTENT HERE. Details below are sample text; replace with the real ones.
export const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const hotel = {
  name: 'Longbeach Hotel',
  full: 'Longbeach Hotel and Conference Centre',
  email: 'hello@example.com',
  phone: '+855 00 000 000',
}

const amenities = ['Air conditioning', 'Free Wi-Fi', 'Breakfast included', 'Pool access']

export const rooms = [
  {
    slug: 'sea-view-room', name: 'Sea View Room', image: '1602002418082-a4443e081dd1',
    tagline: 'Wake up to the water.',
    sleeps: 2, bed: '1 king bed', view: 'Ocean view',
    desc: 'A bright room with a king bed and a balcony facing the sea. Open the doors in the morning and the breeze comes straight in.',
    amenities, gallery: ['1611444756156-bbe40e0a2e56', '1584132869994-873f9363a562', '1587847139658-201a62d23770'],
  },
  {
    slug: 'twin-room', name: 'Twin Room', image: '1629078691977-dc51747c0263',
    tagline: 'Comfortable for friends and colleagues.',
    sleeps: 2, bed: '2 single beds', view: 'Garden view',
    desc: 'Two single beds, a work desk and plenty of space. A good fit for conference guests and travelling friends.',
    amenities, gallery: ['1577372970039-2ac351969c87', '1520520731457-9283dd14aa66', '1520250497591-112f2f40a3f4'],
  },
  {
    slug: 'royal-room', name: 'Royal Room', image: '1578683010236-d716f9a3f461',
    tagline: 'More space, more comfort.',
    sleeps: 3, bed: '1 king bed and a sofa bed', view: 'Ocean view',
    desc: 'Our largest room, with a separate seating area and a deep bathtub. Made for longer stays and special occasions.',
    amenities: [...amenities, 'Bathtub'], gallery: ['1584132869994-873f9363a562', '1611444756156-bbe40e0a2e56', '1587847139658-201a62d23770'],
  },
  {
    slug: 'private-bungalow', name: 'Private Bungalow', image: '1590523277760-06f4e9939d1a',
    tagline: 'Your own place by the sea.',
    sleeps: 4, bed: '1 king bed and 2 single beds', view: 'Beachfront',
    desc: 'A standalone bungalow with a private terrace a few steps from the sand. Quiet, roomy and ideal for families.',
    amenities: [...amenities, 'Private terrace', 'Spa access'], gallery: ['1590523277543-a94d2e4eb00b', '1611444756156-bbe40e0a2e56', '1584132869994-873f9363a562'],
  },
]

export const dining = {
  restaurant: {
    title: 'Our Restaurant', lead: 'Fresh seafood, local produce and long lunches by the water.',
    hero: ['1600565193348-f74bd3c7ccdf', '1577106263724-2c8e03bfe9cf'],
    hours: ['Breakfast 6:30 AM to 10:30 AM', 'Lunch 11:30 AM to 2:30 PM', 'Dinner 5:30 PM to 10:00 PM'],
    features: [
      { title: 'Wine and dine', text: 'A short, well chosen wine list built to go with the menu, from crisp whites for the seafood to reds for the grill.', image: '1623073284788-0d846f75e329' },
      { title: 'Desserts', text: 'Made fresh every day. Ask what is new this week.', image: '1481819167214-0427aac02394' },
      { title: 'Meet the chef', text: 'Our kitchen cooks with seasonal ingredients from nearby farms and the morning catch.', image: '1541614101331-1a5a3a194e92' },
    ],
    note: 'Seating for 110 indoors and 110 outdoors. Walk-ins welcome, bookings recommended.',
  },
  bar: {
    title: 'Our Bar', lead: 'Cocktails, music and sunsets.',
    hero: ['1514933651103-005eec06c04b', '1604328471151-b52226907017'],
    hours: ['Open 4:00 PM to midnight', 'Happy hour 4:00 PM to 9:00 PM', 'Live music Wednesday to Friday, 6:30 PM to 8:30 PM'],
    features: [
      { title: 'Evening drinks', text: 'Classic and house cocktails, cold beer and a relaxed place to watch the sun go down.', image: '1616671301376-3d98b18cb052' },
      { title: 'Live entertainment', text: 'Live bands play through the week. Come early for a seat near the stage.', image: '1586611292717-f828b167408c' },
    ],
    note: 'Smart casual. Guests should be 18 or older.',
  },
}

export const gallery = ['1602217401645-2f11316f48cc', '1602217401731-1b9d5c2384f7', '1602002418211-9d76470fa71f', '1602002418816-5c0aeef426aa', '1514933651103-005eec06c04b', '1586611292717-f828b167408c']
