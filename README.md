# Link to live app: https://flower-store-six.vercel.app/

Проект создавался для обучения, некоторые решения могут быть не самыми оптимальными. С каждым проектом я расту и развиваюсь как разработчик, поэтому прошу ознакомиться с другими моими проектами в которых исправлены недочеты предыдущих.

Данный проект является моим первым большим проектом. Его цель - знакомство с новыми для меня технологиями.

В данном проекте я познакомился и разобрался с:
1. Next JS - SSR, SSG, роутинг, url.
2. TS - Впервые использовал TS.
3. Redux toolkit - Впервые использовал state manager.
4. CSS - Познакомился с использование z-index и модульного css. Адаптивная верстка не предполагалсь в проекте т.к. она занимает много времени.
5. Базы данных - Vercel предоставляет свою serverless DB на базе PostgreSQL. Ее вполне хватило для хранения товаров.
6. Пагинация - Создана простая пагинация через динамическое составление запроса к бд.
7. Фильтрация товаров в каталоге является самым важным и сложным механизмом в данном проекте. Далее будут перечислены мои решения для создания фильтрации:
   * Фильтры разных категорий могут как пересекаться так и исключать варианты.
   * Все фильтры хранятся в слаге url.
   * Изначально фильтры хранятся в стейте, далее они прогоняются через функцию с регулярными выражениями для составления правильного url.
   * Для обеспечения обратной связи url и стейта я использовал функцию которая разбирала url на составляющие и добавляла их в стейт. Данная функция была написана таким образом, чтобы пользователь мог в любом порядке вводить фильтры в url и получать корректный ответ. Так        же такое решение позволяет делиться ссылкой с другими пользователями и при этом все фильтры будут корректно работать и применяться.
