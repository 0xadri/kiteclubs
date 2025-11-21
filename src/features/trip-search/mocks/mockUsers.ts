import type { User } from '../types';

// Languages
const LANG_SPANISH = 'Spanish';
const LANG_ENGLISH = 'English';
const LANG_CATALAN = 'Catalan';
const LANG_GERMAN = 'German';
const LANG_FRENCH = 'French';
const LANG_ITALIAN = 'Italian';
const LANG_PORTUGUESE = 'Portuguese';
const LANG_RUSSIAN = 'Russian';

// Home base
const CITY_BARCELONA = 'Barcelona';
const COUNTRY_SPAIN = 'Spain';

// Tags
const TAG_SUPERHOST = 'Superhost';
const TAG_SUPERGUEST = 'Superguest';

// Kitesurf skills
const SKILL_BODY_DRAG_UPWIND = 'Body Drag Upwind';
const SKILL_EDGING_UPWIND = 'Edging Upwind';
const SKILL_BASIC_JUMP = 'Basic Jump (Small Pop)';
const SKILL_SLIDE_TURN = 'Slide Turn';
const SKILL_TOE_SIDE_RIDING = 'Toe-Side Riding';
const SKILL_HEEL_TO_TOE_CARVE = 'Heel-to-Toe Carve Transition';
const SKILL_TOE_TO_HEEL_CARVE = 'Toe-to-Heel Carve Transition';
const SKILL_SURFACE_360 = 'Surface 360';
const SKILL_DOWNLOOP_TRANSITION = 'Downloop Transition';
const SKILL_TAIL_GRAB_SMALL = 'Tail Grab (Small Jump)';
const SKILL_BASIC_BACKROLL = 'Basic Backroll (Low Height)';
const SKILL_BACKROLL_TRANSITION = 'Backroll Transition';
const SKILL_BACKROLL_TAIL_GRAB = 'Backroll Tail Grab';
const SKILL_FRONTROLL_TRANSITION = 'Frontroll Transition';
const SKILL_FRONTROLL_TO_BLIND = 'Frontroll to Blind';
const SKILL_PENDULUM_JUMP = 'Pendulum Jump';
const SKILL_RALEY_UNHOOKED = 'Raley (Unhooked)';
const SKILL_SLIM_CHANCE = 'Slim Chance';
const SKILL_HANDLEPASS_AIR = 'Handlepass (Air Pass)';
const SKILL_JUMPS_2M = '2m+ jumps';
const SKILL_JUMPS_3M = '3m+ jumps';
const SKILL_JUMPS_5M = '5m+ jumps';
const SKILL_JUMPS_6M = '6m+ jumps';
const SKILL_JUMPS_12M = '12m+ jumps';
const SKILL_JUMPS_15M = '15m+ jumps';

export const mockUsers: User[] = [
  {
    id: '4M5NJ8',
    firstName: 'Carlos',
    lastName: 'Martínez',
    signedUpDate: '2025-03-15',
    description: 'Outdoor enthusiast and experienced trip organizer.',
    languages: [LANG_SPANISH, LANG_ENGLISH, LANG_CATALAN],
    homeBase: { city: CITY_BARCELONA, country: COUNTRY_SPAIN },
    carDetails: {
      brand: 'SEAT',
      model: 'Leon',
      color: 'Blue',
      year: 2022,
      km: '35K',
    },
    email: 'carlos.martinez@email.com',
    phone: '+34 612 345 678',
    tags: [TAG_SUPERHOST],
    kitesurfSkills: [
      SKILL_BODY_DRAG_UPWIND,
      SKILL_EDGING_UPWIND,
      SKILL_BASIC_JUMP,
      SKILL_SLIDE_TURN,
      SKILL_TOE_SIDE_RIDING,
      SKILL_HEEL_TO_TOE_CARVE,
      SKILL_SURFACE_360,
      SKILL_JUMPS_3M,
    ],
  },
  {
    id: 'W1KQ4S',
    firstName: 'Anna',
    lastName: 'Schneider',
    signedUpDate: '2025-07-02',
    description: 'Loves exploring new places and meeting people.',
    languages: [LANG_GERMAN, LANG_ENGLISH, LANG_SPANISH],
    homeBase: { city: CITY_BARCELONA, country: COUNTRY_SPAIN },
    carDetails: {
      brand: 'Volkswagen',
      model: 'Golf',
      color: 'White',
      year: 2021,
      km: '42K',
    },
    email: 'anna.schneider@email.com',
    phone: '+34 698 123 456',
    tags: [TAG_SUPERGUEST],
    kitesurfSkills: [
      SKILL_BODY_DRAG_UPWIND,
      SKILL_EDGING_UPWIND,
      SKILL_BASIC_JUMP,
      SKILL_SLIDE_TURN,
      SKILL_TOE_SIDE_RIDING,
      SKILL_DOWNLOOP_TRANSITION,
      SKILL_TAIL_GRAB_SMALL,
      SKILL_JUMPS_3M,
    ],
  },
  {
    id: 'A7B2C3',
    firstName: 'Lucía',
    lastName: 'Fernández',
    signedUpDate: '2025-01-10',
    description: 'Passionate about kitesurfing and group adventures.',
    languages: [LANG_SPANISH, LANG_ENGLISH, LANG_FRENCH],
    homeBase: { city: CITY_BARCELONA, country: COUNTRY_SPAIN },
    carDetails: {
      brand: 'Renault',
      model: 'Clio',
      color: 'Red',
      year: 2023,
      km: '18K',
    },
    email: 'lucia.fernandez@email.com',
    phone: '+34 634 567 890',
    tags: [TAG_SUPERHOST, TAG_SUPERGUEST],
    kitesurfSkills: [
      SKILL_BODY_DRAG_UPWIND,
      SKILL_EDGING_UPWIND,
      SKILL_BASIC_JUMP,
      SKILL_SLIDE_TURN,
      SKILL_TOE_SIDE_RIDING,
      SKILL_BASIC_BACKROLL,
      SKILL_BACKROLL_TRANSITION,
      SKILL_FRONTROLL_TRANSITION,
      SKILL_JUMPS_6M,
    ],
  },
  {
    id: 'X9L2P7',
    firstName: 'Marco',
    lastName: 'Rossi',
    signedUpDate: '2025-09-05',
    description: 'Italian expat, loves road trips and the sea.',
    languages: [LANG_ITALIAN, LANG_SPANISH, LANG_ENGLISH],
    homeBase: { city: CITY_BARCELONA, country: COUNTRY_SPAIN },
    carDetails: {
      brand: 'Fiat',
      model: '500',
      color: 'Black',
      year: 2020,
      km: '60K',
    },
    email: 'marco.rossi@email.com',
    phone: '+34 600 123 456',
    tags: [TAG_SUPERGUEST],
    kitesurfSkills: [
      SKILL_BODY_DRAG_UPWIND,
      SKILL_EDGING_UPWIND,
      SKILL_BASIC_JUMP,
      SKILL_SLIDE_TURN,
      SKILL_TOE_SIDE_RIDING,
      SKILL_HEEL_TO_TOE_CARVE,
      SKILL_TOE_TO_HEEL_CARVE,
      SKILL_PENDULUM_JUMP,
      SKILL_JUMPS_5M,
    ],
  },
  {
    id: 'Q8F6Z1',
    firstName: 'Sophie',
    lastName: 'Dubois',
    signedUpDate: '2025-06-20',
    description: 'French traveler and food lover.',
    languages: [LANG_FRENCH, LANG_SPANISH, LANG_ENGLISH],
    homeBase: { city: CITY_BARCELONA, country: COUNTRY_SPAIN },
    carDetails: {
      brand: 'Peugeot',
      model: '208',
      color: 'Grey',
      year: 2022,
      km: '25K',
    },
    email: 'sophie.dubois@email.com',
    phone: '+34 611 222 333',
    tags: [],
    kitesurfSkills: [
      SKILL_BODY_DRAG_UPWIND,
      SKILL_EDGING_UPWIND,
      SKILL_BASIC_JUMP,
      SKILL_SLIDE_TURN,
      SKILL_TOE_SIDE_RIDING,
      SKILL_JUMPS_2M,
    ],
  },
  {
    id: 'M3T7V2',
    firstName: 'João',
    lastName: 'Silva',
    signedUpDate: '2025-04-11',
    description: 'Portuguese kitesurfer and trip leader.',
    languages: [LANG_PORTUGUESE, LANG_SPANISH, LANG_ENGLISH],
    homeBase: { city: CITY_BARCELONA, country: COUNTRY_SPAIN },
    carDetails: {
      brand: 'BMW',
      model: 'X1',
      color: 'Silver',
      year: 2021,
      km: '50K',
    },
    email: 'joao.silva@email.com',
    phone: '+34 622 333 444',
    tags: [TAG_SUPERHOST],
    kitesurfSkills: [
      SKILL_BODY_DRAG_UPWIND,
      SKILL_EDGING_UPWIND,
      SKILL_BASIC_JUMP,
      SKILL_SLIDE_TURN,
      SKILL_TOE_SIDE_RIDING,
      SKILL_BASIC_BACKROLL,
      SKILL_BACKROLL_TAIL_GRAB,
      SKILL_RALEY_UNHOOKED,
      SKILL_FRONTROLL_TO_BLIND,
      SKILL_JUMPS_15M,
    ],
  },
  {
    id: 'K5R8D4',
    firstName: 'Irina',
    lastName: 'Petrova',
    signedUpDate: '2025-08-28',
    description: 'Russian expat, loves group adventures and the Mediterranean.',
    languages: [LANG_RUSSIAN, LANG_SPANISH, LANG_ENGLISH],
    homeBase: { city: CITY_BARCELONA, country: COUNTRY_SPAIN },
    carDetails: {
      brand: 'Toyota',
      model: 'Corolla',
      color: 'Green',
      year: 2019,
      km: '100K+',
    },
    email: 'irina.petrova@email.com',
    phone: '+34 655 444 555',
    tags: [TAG_SUPERGUEST],
    kitesurfSkills: [
      SKILL_BODY_DRAG_UPWIND,
      SKILL_EDGING_UPWIND,
      SKILL_BASIC_JUMP,
      SKILL_SLIDE_TURN,
      SKILL_TOE_SIDE_RIDING,
      SKILL_SURFACE_360,
      SKILL_SLIM_CHANCE,
      SKILL_HANDLEPASS_AIR,
      SKILL_JUMPS_12M,
    ],
  },
];
