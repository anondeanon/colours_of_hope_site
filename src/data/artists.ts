export type Artist = {
  id: string;
  number: string;
  name: string;
  age: number;
  city: string;
  title: string;
  medium: string;
  bio: string;
  story: string;
  artwork: string;
  avatar: string;
};

export const artists: Artist[] = [
  {
    id: "sasha",
    number: "01",
    name: "Саша Савенко",
    age: 7,
    city: "Київ",
    title: "Мій дім біля моря",
    medium: "акварель",
    bio: "Київ · акварель і олівці",
    story:
      "Я намалював дім біля моря, бо так уявляю спокійне місце для всієї родини. Сонце велике, бо воно гріє всіх, а мушлі на піску — це подарунки від хвиль.",
    artwork: "/artworks/artwork-sasha.png",
    avatar: "/avatars/avatar-sasha.png",
  },
  {
    id: "olia",
    number: "02",
    name: "Ольга Гайдук",
    age: 9,
    city: "Львів",
    title: "Моє подвір'я",
    medium: "гуаш і фломастери",
    bio: "Львів · гуаш і фломастери",
    story:
      "Я намалювала подвір'я, у якому хотіла б гратися щодня: з гіркою, гойдалкою і друзями, яких вигадую сама. Тут є дракон на лавці, гном біля грибів і веселка після дощу — бо навіть звичайний двір може бути казковим.",
    artwork: "/artworks/artwork-olia.png",
    avatar: "/avatars/avatar-olia.png",
  },
  {
    id: "nikita",
    number: "03",
    name: "Нікіта Бєлов",
    age: 8,
    city: "Одеса",
    title: "Нічний ліс",
    medium: "олівці",
    bio: "Одеса · кольорові олівці",
    story:
      "У цьому лісі не страшно, бо гриби світяться і допомагають знайти дорогу. Місяць я намалював синім, щоб було видно, як між деревами ховаються звірі.",
    artwork: "/artworks/artwork-nikita.png",
    avatar: "/avatars/avatar-nikita.png",
  },
  {
    id: "danyil",
    number: "04",
    name: "Даниїл Кравець",
    age: 10,
    city: "Харків",
    title: "Місто мрій",
    medium: "акрил",
    bio: "Харків · акрил",
    story:
      "Це місто, у якому хочеться жити: будинки різнокольорові, трамвай їде повільно, а в небі літають повітряні кулі. Я зібрав усе, що люблю бачити з вікна.",
    artwork: "/artworks/artwork-danyil.png",
    avatar: "/avatars/avatar-danyil.png",
  },
  {
    id: "anna",
    number: "05",
    name: "Анна Новак",
    age: 6,
    city: "Вінниця",
    title: "Родина",
    medium: "пастель",
    bio: "Вінниця · пастель",
    story:
      "Я намалювала маму, тата, себе і песика. Ми тримаємося за руки, а з хмари замість дощу падають серця — так я показую, що нас люблять.",
    artwork: "/artworks/artwork-anna.png",
    avatar: "/avatars/avatar-anna.png",
  },
  {
    id: "alina",
    number: "06",
    name: "Аліна Козак",
    age: 11,
    city: "Дніпро",
    title: "Птахи весни",
    medium: "акварель",
    bio: "Дніпро · акварель",
    story:
      "Птахи повертаються додому крізь рожеві хмари. Я хотіла намалювати весну так, ніби небо саме радіє, що всі знову разом.",
    artwork: "/artworks/artwork-alina.png",
    avatar: "/avatars/avatar-alina.png",
  },
  {
    id: "kyrylo",
    number: "07",
    name: "Кирило Савич",
    age: 8,
    city: "Чернігів",
    title: "Космічна подорож",
    medium: "фломастери",
    bio: "Чернігів · фломастери",
    story:
      "Моя ракета летить між планетами, які схожі на цукерки. Я намалював космос яскравим, бо там, як на святі, завжди багато кольорів.",
    artwork: "/artworks/artwork-kyrylo.png",
    avatar: "/avatars/avatar-kyrylo.png",
  },
];
