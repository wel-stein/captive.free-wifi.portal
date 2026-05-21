export const VOUCHERS = [
  {
    id: 'city-brews-50',
    title: '50% Off City Brews',
    subtitle: 'Grab a half-price latte at any city center terminal cafe.',
    description:
      'Savor the finest artisan coffee in the city. Valid for any large beverage at all City Brews locations near Express Bus terminals.',
    longDescription:
      'Enjoy half-price on any signature roast or seasonal specialty drink. Perfect for your morning commute or a mid-day refresh during your travel stopover.',
    icon: 'coffee',
    headerIcon: 'local_cafe',
    expires: 'Expires: 24 Oct 2025',
    endsLabel: 'Ends Oct 31',
    locations: '5 Locations',
    code: 'CB-50-XPR',
    badge: 'Limited Offer',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMxMp1wMIVae2dWCM5xHOH92yq2-NpJN-XACMruZBp2-R8Rr0o1ExVfrZZMIru2nVT_d7soQE1DvGg3xJyJqrPjrUZ1gY1Jhy5udPjJHcvctpNzlklTM67D2vADZYVTTId0-ItZOO6Djlj-B9kFvkYVHDh-afpTeW7YMccmcHAO8LElo8aJJO7zK9VgBoXmi3vKClwAKemduHR-XCuQkH4CIAX-AQle1caYqdIfhmN5v4M6ci2-C_E5kfoN45xcGyE9tbtuUbNrsQ',
  },
  {
    id: 'stay-2-pay-1',
    title: 'Stay-2-Pay-1 Deals',
    subtitle: 'Book two nights at partner hotels and pay for only one.',
    description:
      'Two nights for the price of one at select partner hotels along your route. Book ahead from the Express Bus app.',
    longDescription:
      'Stay two nights and pay for only one at participating partner hotels. Reservation must be made through the Express Bus app at least 24 hours in advance.',
    icon: 'bed',
    headerIcon: 'hotel',
    expires: 'Expires: 12 Nov 2025',
    endsLabel: 'Ends Nov 12',
    locations: '12 Hotels',
    code: 'HT-21-XPR',
    badge: 'Premium Deal',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNQe2qPIRqTG0LxkC_LAaMWOzJUyrUGx8Aa7P-KSsifRLEPRpjPn4y7JvAsvc4zVmbEQR0ufAhs2yaSTKO5oPtfF2kZH_Z-UrUF5zH4MvyeRmnO3FULr9k8Zwrjsp_jyQKEhAh-aC0XqVHRVklv1T7x4dSnEVposwD3gsAbjVuKbNj3WAv9aaOqQzlskPHaqFG2dwrWtdJBAZNAICBHnGYw58C42hAVT8PMqliUP7aav872bZunE84OY4Vf74AliAmK4GQWuoJXaM',
  },
  {
    id: 'free-snack',
    title: 'Free Snack at Terminal',
    subtitle: 'One complimentary bakery item with any ticket purchase.',
    description:
      'Pick up a free pastry or snack at any Express Bus terminal bakery counter when you buy a ticket.',
    longDescription:
      'Receive one complimentary bakery item (croissant, muffin, or cookie) with any same-day ticket purchase. Show this voucher at the counter to redeem.',
    icon: 'fastfood',
    headerIcon: 'fastfood',
    expires: 'Expires: 30 Sep 2025',
    endsLabel: 'Ends Sep 30',
    locations: 'All terminals',
    code: 'SN-FR-XPR',
    badge: 'Daily Treat',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNQe2qPIRqTG0LxkC_LAaMWOzJUyrUGx8Aa7P-KSsifRLEPRpjPn4y7JvAsvc4zVmbEQR0ufAhs2yaSTKO5oPtfF2kZH_Z-UrUF5zH4MvyeRmnO3FULr9k8Zwrjsp_jyQKEhAh-aC0XqVHRVklv1T7x4dSnEVposwD3gsAbjVuKbNj3WAv9aaOqQzlskPHaqFG2dwrWtdJBAZNAICBHnGYw58C42hAVT8PMqliUP7aav872bZunE84OY4Vf74AliAmK4GQWuoJXaM',
  },
];

export function getVoucher(id) {
  return VOUCHERS.find((v) => v.id === id);
}
