# Инструкции для AI-агентов (cohort40)

Короткое руководство, чтобы сразу быть продуктивным в этом репо. Проект: Vite + React 19 + TypeScript + SWC + SCSS Modules, React Router v7 (data routers).

## Архитектура и паттерны

- Точка входа: `src/main.tsx` → `<RouterProvider router={router} />`.
- Роутинг: `src/router.tsx` использует `createBrowserRouter` и корневой `Layout` (`components/Layout`) c `<Header/>`, `<Outlet/>`, `<Footer/>`.
- Страницы: `src/pages/<Page>/index.tsx` + соседний `logic.ts` для хуков данных/состояния. Общие стили секции — `pages/SectionPage.module.scss`.
- Компоненты: `src/components/<Component>/{index.tsx,logic.ts,<Name>.module.scss}`. Пример: `components/Card` — универсальная карточка; если передан `to`, рендерится `<Link>`, иначе `<div>`.
- Данные и типы: `src/shared/{types.ts,students.ts,artifacts.ts}`. UI полностью питается статичными массивами (без API).
  - Добавление артефакта: внесите объект в `src/shared/artifacts.ts` c полями `{ id, title, text, image, desc? }`. `id` используется в URL `/artifacts/:id`.
- Ассеты: публичные картинки лежат в `public/photo/...` и доступны как `/photo/...` (пример: `students.kir.photo = '/photo/students/kir.jpg'`).
- Стили: глобальные — `src/styles/index.scss` (классы `container`, `btn` и переменные из `_vars.scss`); у компонентов — SCSS-модули.

## Рабочие процессы (локально и в CI)

- Node 20. Установка и запуск:
  - dev: `npm run dev`
  - build: `npm run build` (включает `tsc -b` + `vite build`)
  - preview: `npm run preview`
  - lint: `npm run lint -- --max-warnings=0`
  - формат: `npm run format` / `npm run format:check`
- CI (`.github/workflows/ci.yml`) на main/PR: `npm ci` → prettier check → ESLint (без предупреждений) → `npx tsc -b` → build. Избегайте предупреждений и типовых ошибок.
- CODEOWNERS требует ревью от `@Andival-Sei`. Для добавления студента см. `CONTRIBUTING.md` и `README.PR.md` (вносятся только правки в `src/shared/students.ts` и, при необходимости, ассеты в `public/`).

## Проектные конвенции

- Разделение: визуальный слой в `index.tsx`, бизнес-хуки рядом в `logic.ts` (называйте `useXxx`).
- Типы централизованы в `src/shared/types.ts` и переиспользуются повсюду.
- Внешние ссылки — с `target="_blank"` и `rel="noreferrer"` (см. `Header`).
- Не добавляйте сервер/запросы: проект статичный. Новые данные — в `src/shared/*.ts`.
- React 19: используйте `createRoot`, JSX runtime `react-jsx`, не импортируйте `React` по умолчанию.
- TS строгий (`strict`, `noUnused*`, `noUncheckedSideEffectImports`). Не держите неиспользуемые переменные/импорты и не положитесь на побочные эффекты.

## Типовые задачи и примеры

- Новая страница: создайте `src/pages/MyPage/{index.tsx,logic.ts,MyPage.module.scss}`; подключите в `src/router.tsx` как дочерний роут к `/` под `Layout`. Для макета секции используйте классы из `SectionPage.module.scss`.
- Новая карточка студента: добавьте объект в массив `src/shared/students.ts` (уникальный `slug`); фото — в `public/photo/students/` или публичный URL. Карточка автоматически появится на `Home` и `/students`, а страница — по `/students/:slug` (см. `pages/StudentDetail/logic.ts`).
- Использование `Card`: передайте `to` для кликабельной карточки; поля — `{ title, text?, image?, to?, desc? }`.

## Важные файлы-ориентиры

- Роуты: `src/router.tsx`
- Макет: `components/Layout`
- Карточки: `components/Card`
- Данные: `src/shared/*`
- Глобальные стили: `src/styles/*`

## Примечания для PR

- Соберите и пролинтуйте локально перед PR, CI не допускает предупреждений.
- Следуйте шаблону PR `.github/pull_request_template.md`; предпочитается Squash merge.
