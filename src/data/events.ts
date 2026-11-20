export type EventCategory = 'Technology' | 'Education' | 'Business' | 'Arts & Culture' | 'Community'
export type EventFormat = 'Online' | 'In-person'

export type Event = {
  id: string
  title: string
  shortDescription: string
  description: string
  category: EventCategory
  date: string
  startTime: string
  endTime: string
  location: string
  format: EventFormat
  price: number
  image: string
  organizer: string
  registrationNote: string
}

export const events: Event[] = [
  {
    id: 'web-development-workshop',
    title: 'Web Development Workshop',
    shortDescription: 'Learn modern web development and build practical skills.',
    description: 'A practical, beginner-friendly workshop covering HTML, CSS, JavaScript, and the fundamentals of building useful web experiences.',
    category: 'Technology',
    date: 'Nov 25, 2026',
    startTime: '9:00 AM',
    endTime: '1:00 PM',
    location: 'Addis Ababa Innovation Hub',
    format: 'In-person',
    price: 0,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    organizer: 'EventConnect Learning Team',
    registrationNote: 'Demo registration only. No real booking is submitted.',
  },
  {
    id: 'community-innovation-meetup',
    title: 'Community Innovation Meetup',
    shortDescription: 'Connect with creative minds and explore new ideas.',
    description: 'Meet local makers, founders, and community builders for an evening of short talks, idea sharing, and meaningful connections.',
    category: 'Community',
    date: 'Nov 30, 2026',
    startTime: '5:30 PM',
    endTime: '8:00 PM',
    location: 'Bishoftu Community Center',
    format: 'In-person',
    price: 0,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    organizer: 'Bishoftu Community Network',
    registrationNote: 'Demo registration only. No real booking is submitted.',
  },
  {
    id: 'live-music-festival',
    title: 'Live Music Festival',
    shortDescription: 'Enjoy an unforgettable live music experience.',
    description: 'Spend an evening with emerging artists and established performers at a community celebration of live music and culture.',
    category: 'Arts & Culture',
    date: 'Dec 5, 2026',
    startTime: '4:00 PM',
    endTime: '10:00 PM',
    location: 'Addis Ababa Unity Park',
    format: 'In-person',
    price: 15,
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80',
    organizer: 'Connect Arts Collective',
    registrationNote: 'Demo registration only. Payment is not collected.',
  },
  {
    id: 'future-technology-conference',
    title: 'Technology and Future Conference',
    shortDescription: 'Explore technology trends and meet industry professionals.',
    description: 'A full day of talks and discussions about responsible innovation, digital products, and the future of work in Africa.',
    category: 'Technology',
    date: 'Dec 12, 2026',
    startTime: '8:30 AM',
    endTime: '5:00 PM',
    location: 'Online via EventConnect Live',
    format: 'Online',
    price: 25,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    organizer: 'Future Africa Forum',
    registrationNote: 'Demo registration only. The meeting link is not sent.',
  },
  {
    id: 'design-masterclass',
    title: 'UI/UX Design Masterclass',
    shortDescription: 'Discover the principles of creating better digital experiences.',
    description: 'Practice user research, wireframing, and interface critique with designers who build accessible digital products.',
    category: 'Education',
    date: 'Dec 18, 2026',
    startTime: '10:00 AM',
    endTime: '3:00 PM',
    location: 'Addis Ababa Design Studio',
    format: 'In-person',
    price: 10,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80',
    organizer: 'Design Forward Ethiopia',
    registrationNote: 'Demo registration only. Payment is not collected.',
  },
  {
    id: 'young-entrepreneurs-meetup',
    title: 'Young Entrepreneurs Meetup',
    shortDescription: 'Share ideas, network, and discover new opportunities.',
    description: 'An informal networking session for early-stage entrepreneurs, students, and anyone curious about starting a community-focused venture.',
    category: 'Business',
    date: 'Dec 22, 2026',
    startTime: '6:00 PM',
    endTime: '8:30 PM',
    location: 'Online via EventConnect Live',
    format: 'Online',
    price: 0,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
    organizer: 'Young Founders Network',
    registrationNote: 'Demo registration only. No real booking is submitted.',
  },
]

export const categories = ['All categories', ...new Set(events.map((event) => event.category))]

export function getEventById(id: string) {
  return events.find((event) => event.id === id)
}
