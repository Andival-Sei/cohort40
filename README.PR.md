# Как добавить свою карточку через PR (Когорта №40)

Этот файл — короткая шпаргалка для студентов. Подробный вариант — в `CONTRIBUTING.md`.

## Шаги

1. Форкните репозиторий и создайте ветку, например: `feat/add-card-your-slug`.
2. Откройте `src/shared/students.ts` и добавьте объект в массив `students` (пример ниже).
3. Запустите проект локально и убедитесь, что карточка видна на главной и на странице студента.
4. Создайте PR в основной репозиторий.

## Пример объекта

```ts
{
  slug: 'your-slug',
  name: 'Ваше Имя',
  tagline: 'Frontend • React • TypeScript',
  photo: 'https://example.com/your-photo.jpg',
  bio: 'Немного о себе... (опционально)',
  links: [
    { label: 'GitHub', url: 'https://github.com/your' },
    { label: 'Telegram', url: 'https://t.me/your' },
  ],
}
```
