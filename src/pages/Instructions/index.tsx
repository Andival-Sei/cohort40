import styles from './Instructions.module.scss'

/**
 * Страница инструкций: содержит руководства по работе с проектом.
 * Пока что включает инструкцию по добавлению себя в проект через PR.
 */
export default function InstructionsPage() {
  return (
    <main id="main" className={styles.instructions}>
      <div className="container">
        <h1 className={styles.title}>Инструкции</h1>

        <section className={styles.instruction}>
          <h2 className={styles.instructionTitle}>Как добавить себя в проект через Pull Request</h2>

          <div className={styles.instructionContent}>
            <p className={styles.description}>
              Эта инструкция поможет вам добавить свою информацию в проект "Когорта №40" через
              создание Pull Request на GitHub.
            </p>

            <div className={styles.steps}>
              <h3>Пошаговый план:</h3>

              <div className={styles.step}>
                <h4>1. Форк репозитория</h4>
                <p>
                  Перейдите на страницу проекта{' '}
                  <a
                    href="https://github.com/Andival-Sei/cohort40"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    https://github.com/Andival-Sei/cohort40
                  </a>{' '}
                  и нажмите кнопку "Fork" в правом верхнем углу. Это создаст копию репозитория в
                  вашем аккаунте.
                </p>
              </div>

              <div className={styles.step}>
                <h4>2. Клонирование вашего форка</h4>
                <p>Склонируйте ваш форк на локальный компьютер:</p>
                <pre className={styles.code}>
                  <code>git clone https://github.com/YOUR_USERNAME/cohort40.git</code>
                </pre>
                <p>
                  Замените <code>YOUR_USERNAME</code> на ваше имя пользователя GitHub.
                </p>
              </div>

              <div className={styles.step}>
                <h4>3. Создание новой ветки</h4>
                <p>Создайте новую ветку для ваших изменений:</p>
                <pre className={styles.code}>
                  <code>git checkout -b add-student-YOUR_NAME</code>
                </pre>
                <p>
                  Замените <code>YOUR_NAME</code> на ваше имя.
                </p>
              </div>

              <div className={styles.step}>
                <h4>4. Добавление вашей информации</h4>
                <p>
                  Добавьте свою фотографию в папку <code>public/photo/students/</code>и обновите
                  файл <code>src/shared/students.ts</code>:
                </p>
                <pre className={styles.code}>
                  <code>{`// Добавьте в массив students новый объект:
{
  name: "Ваше Имя",
  slug: "your-name",
  tagline: "Краткое описание о себе",
  bio: "Подробная биография",
  photo: "/photo/students/your-photo.jpg"
}`}</code>
                </pre>
              </div>

              <div className={styles.step}>
                <h4>5. Добавление артефакта (опционально)</h4>
                <p>
                  Если хотите добавить артефакт, поместите изображение в
                  <code>public/photo/artifacts/</code> и обновите{' '}
                  <code>src/shared/artifacts.ts</code>:
                </p>
                <pre className={styles.code}>
                  <code>{`// Добавьте в массив artifacts новый объект:
{
  id: "unique-id",
  title: "Название артефакта",
  text: "Описание артефакта",
  image: "/photo/artifacts/your-artifact.jpg"
}`}</code>
                </pre>
              </div>

              <div className={styles.step}>
                <h4>6. Коммит и пуш изменений</h4>
                <p>Сохраните изменения и отправьте их в ваш форк:</p>
                <pre className={styles.code}>
                  <code>{`git add .
git commit -m "Добавляю студента: Ваше Имя"
git push origin add-student-YOUR_NAME`}</code>
                </pre>
              </div>

              <div className={styles.step}>
                <h4>7. Создание Pull Request</h4>
                <p>
                  Перейдите в ваш форк на GitHub и нажмите "Compare & pull request". Заполните
                  описание PR, указав что именно вы добавили, и создайте запрос.
                </p>
              </div>

              <div className={styles.step}>
                <h4>8. Ожидание ревью</h4>
                <p>
                  После создания PR ваши изменения будут рассмотрены командой. При необходимости
                  внесите правки по замечаниям ревьюеров.
                </p>
              </div>
            </div>

            <div className={styles.important}>
              <h3>Важные моменты:</h3>
              <ul>
                <li>
                  Убедитесь, что ваша фотография имеет разумный размер (рекомендуется до 500KB)
                </li>
                <li>Используйте понятные имена файлов без пробелов и специальных символов</li>
                <li>Проверьте, что код компилируется без ошибок</li>
                <li>Следуйте существующему стилю кода в проекте</li>
              </ul>
            </div>

            <div className={styles.help}>
              <h3>Нужна помощь?</h3>
              <p>
                Если у вас возникли вопросы, создайте Issue в репозитории проекта или обратитесь к
                команде в чате когорты.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
