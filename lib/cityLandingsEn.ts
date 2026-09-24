/** English locale fields for a city landing (paired with TR CITY_LANDINGS). */
export type CityEnContent = {
  slugEn: string;
  keyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  overline: string;
  description: string;
  detailTitle: string;
  detailBody: string;
  points: Array<{ title: string; body: string }>;
  faqs: Array<{ q: string; a: string }>;
  whatsappText: string;
};

export const CITY_EN_BY_TR_SLUG: Record<string, CityEnContent> = {
  'ankara-cocuk-eskrim': {
    slugEn: 'ankara-kids-fencing',
    keyword: 'ankara kids fencing',
    overline: 'Ankara kids fencing',
    title: 'Ankara kids fencing: a safe program for ages 6–14',
    metaTitle: 'Ankara Kids Fencing | Ages 6–14',
    metaDescription:
      'Kids fencing in Ankara for ages 6–14. Focus, balance, and confidence — book a trial class with En Garde Eskrim.',
    description:
      'For families looking for kids fencing in Ankara, our program fits school schedules and small groups. First goals: safe distance, clear stance, and staying present in class.',
    detailTitle: 'How does an Ankara class run?',
    detailBody:
      'Ankara groups move in three blocks: short warm-up games, basic footwork and distance, then supervised weapon drills with protective gear. There is no crowded match pressure; pace rises only when the child is ready. Trial days are set by WhatsApp or phone according to age.',
    whatsappText: 'Hi, I would like information about kids fencing in Ankara.',
    points: [
      {
        title: 'School-friendly groups in Ankara',
        body: 'Ages 6–14 are split by level and attention span. Weekly pace is discussed around school and study schedules.',
      },
      {
        title: 'Calm progress in the capital',
        body: 'The goal is control, not scoring. Short drills build reflexes and confidence; kids learn to manage their own movement.',
      },
      {
        title: 'Start with a trial',
        body: 'In Ankara the first step is a trial class. Send the child’s age; we suggest a day based on availability.',
      },
    ],
    faqs: [
      {
        q: 'Can a complete beginner join Ankara kids fencing?',
        a: 'Yes. Beginner groups accept zero experience. First lessons focus on games, stance, and safe distance.',
      },
      {
        q: 'Which ages are accepted in Ankara?',
        a: 'The program is for ages 6–14. We suggest beginner or development groups by age and coordination.',
      },
      {
        q: 'How do I book an Ankara trial class?',
        a: 'Message age and preferred days on WhatsApp. We confirm a trial time based on Ankara availability.',
      },
      {
        q: 'Do we need a mask and weapon for the first class?',
        a: 'No. Basic gear for trials and beginners is provided by the club.',
      },
    ],
  },
  'kayseri-cocuk-eskrim': {
    slugEn: 'kayseri-kids-fencing',
    keyword: 'kayseri kids fencing',
    overline: 'Kayseri kids fencing',
    title: 'Kayseri kids fencing for disciplined development',
    metaTitle: 'Kayseri Kids Fencing | Ages 6–14',
    metaDescription:
      'Kids fencing in Kayseri for ages 6–14: safe training, foil–epee–sabre basics, trial class and enrollment.',
    description:
      'For Kayseri families who want an individual sport, fencing builds turn-taking, rule-following, and hand–eye coordination in the same class. A trial shows the pace on site.',
    detailTitle: 'How do children learn fencing in Kayseri?',
    detailBody:
      'In Kayseri we settle footwork and distance first. Weapon work opens only with protective gear and coach supervision. Foil, epee, and sabre basics are introduced by age; competition is optional. Continuity and enrollment run on one channel (WhatsApp / phone).',
    whatsappText: 'Hi, I would like information about kids fencing in Kayseri.',
    points: [
      {
        title: 'A clear path in Kayseri',
        body: 'Beginner → development → optional performance. Children are not pushed up before they are ready.',
      },
      {
        title: 'Sport without team pressure',
        body: 'Fencing is individual. Pace can be adjusted for quieter or more energetic kids.',
      },
      {
        title: 'Local enrollment line',
        body: 'For Kayseri, send age and preferred days. Venue and times are confirmed when we talk.',
      },
    ],
    faqs: [
      {
        q: 'What ages is Kayseri kids fencing for?',
        a: 'Ages 6–14. Groups are split by age and level.',
      },
      {
        q: 'How many classes per week in Kayseri?',
        a: 'Beginners usually do well with 1–2 classes a week, adjusted to the school schedule.',
      },
      {
        q: 'Do girls and boys train together in Kayseri?',
        a: 'Age and level matter most. They can train together when the group fits.',
      },
      {
        q: 'Is competing required?',
        a: 'No. Most children come for development and habit. Tournaments are optional.',
      },
    ],
  },
  'samsun-cocuk-eskrim': {
    slugEn: 'samsun-kids-fencing',
    keyword: 'samsun kids fencing',
    overline: 'Samsun kids fencing',
    title: 'Samsun kids fencing: focus and confidence',
    metaTitle: 'Samsun Kids Fencing | Ages 6–14',
    metaDescription:
      'Kids fencing in Samsun for ages 6–14. Reflexes, discipline, and confidence — start with a trial class.',
    description:
      'In Samsun, fencing offers measured physical–mental work away from screen pace. Short blocks, clear rules, and a safe weapon culture.',
    detailTitle: 'How is the Samsun class rhythm built?',
    detailBody:
      'Each Samsun class closes with warm-up, technique, and a short bout rhythm. Children repeat wait–read–move without burnout. Performance pace opens only for those ready. Send the child’s age for a trial; we suggest a day by availability.',
    whatsappText: 'Hi, I would like information about kids fencing in Samsun.',
    points: [
      {
        title: 'Zero-to-start in Samsun',
        body: 'Children with no fencing background are welcome. Early weeks open with games and stance drills.',
      },
      {
        title: 'Focus and reflexes together',
        body: 'Hand–eye coordination, decision speed, and waiting your turn grow in the same class — control, not aggression.',
      },
      {
        title: 'Easy Black Sea contact line',
        body: 'Samsun enrollment and trials run on WhatsApp or phone. Address details are shared when we speak.',
      },
    ],
    faqs: [
      {
        q: 'How do I learn Samsun trial details?',
        a: 'Write the child’s age on WhatsApp. Availability, day, and trial process are confirmed in the chat.',
      },
      {
        q: 'Which weapons are taught in Samsun?',
        a: 'Foil, epee, and sabre fundamentals are introduced. The coach suggests the next step by age.',
      },
      {
        q: 'Can parents watch Samsun classes?',
        a: 'Parents are briefed at the first trial. Regular viewing depends on hall layout and is explained on site.',
      },
      {
        q: 'Is the Samsun program competition-first?',
        a: 'No. Priority is development and safe habit. Competition is optional.',
      },
    ],
  },
  'duzce-cocuk-eskrim': {
    slugEn: 'duzce-kids-fencing',
    keyword: 'duzce kids fencing',
    overline: 'Duzce kids fencing',
    title: 'Duzce kids fencing for a safe start',
    metaTitle: 'Duzce Kids Fencing | Ages 6–14',
    metaDescription:
      'Kids fencing in Duzce for ages 6–14: safe pace, trial class, and enrollment with En Garde Eskrim.',
    description:
      'For Duzce families seeking a calmer children’s sport, fencing builds distance awareness and self-control. Short blocks suit younger attention spans.',
    detailTitle: 'What are the first Duzce classes like?',
    detailBody:
      'In Duzce beginners are not pushed into gear fear — mask and weapon for trials are at the club. Classes use short drills: stance, step, then supervised weapon work. Days are discussed around school and travel; WhatsApp or phone is enough to start.',
    whatsappText: 'Hi, I would like information about kids fencing in Duzce.',
    points: [
      {
        title: 'Close coaching at Duzce scale',
        body: 'Groups stay within age bands. The coach matches pace to the child’s attention span.',
      },
      {
        title: 'Safe weapon culture',
        body: 'Contact is a scored touch, not uncontrolled hitting. Protective gear is standard.',
      },
      {
        title: 'Simple enrollment',
        body: 'For Duzce, send the child’s age. Venue and times are confirmed when we talk.',
      },
    ],
    faqs: [
      {
        q: 'Is Duzce kids fencing OK for children new to sport?',
        a: 'Yes. Beginner groups assume zero experience and open with a game rhythm.',
      },
      {
        q: 'How is a Duzce trial arranged?',
        a: 'Write the age on WhatsApp. We suggest a time for a suitable Duzce group.',
      },
      {
        q: 'Must we buy equipment in Duzce?',
        a: 'Not at first. Trial and beginner gear is provided by the club.',
      },
      {
        q: 'Is competing required?',
        a: 'No. Development-focused training is enough; competition is discussed separately.',
      },
    ],
  },
};
