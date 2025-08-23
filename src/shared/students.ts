import type { Student } from "./types";

/**
 * Список студентов.
 * В реальности пополняется через PR: каждый добавляет объект со своей карточкой.
 */
const students: Student[] = [
  {
    slug: "kir-bari",
    name: "Кир Бари",
    tagline: "Frontend",
    photo: "/photo/students/kir.jpg",
    bio: "Чиловый парень",
    links: [
      { label: "GitHub", url: "https://github.com/Andival-Sei" },
      { label: "Telegram", url: "https://t.me/Andiewahl" },
    ],
  },
  {
    slug: "ivan-ivanov",
    name: "Иван Иванов",
    tagline: "Frontend • React • TypeScript",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop",
    bio: "Люблю чистый код, удобные интерфейсы и котов. Учусь и делаю pet-проекты.",
    links: [
      { label: "GitHub", url: "https://github.com/example" },
      { label: "Telegram", url: "https://t.me/example" },
    ],
  },
  {
    slug: "anna-petrova",
    name: "Анна Петрова",
    tagline: "Fullstack • Node.js • Design Systems",
    photo:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=640&auto=format&fit=crop",
    bio: "Интересуюсь UX, автоматизацией и бэкендом. Верю в силу команды.",
  },
  {
    slug: "sergey-kuznetsov",
    name: "Сергей Кузнецов",
    tagline: "Mobile • React Native",
    photo:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=640&auto=format&fit=crop",
    bio: "Увлекаюсь мобильной разработкой и дизайном интерфейсов.",
  },
];

export default students;
