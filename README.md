# test-task
What we have: There is the CoffeeShop web app with backend and frontend developed using Node.js (both): Backend is the RESTful API, which works with a PostgreSQL database and has background jobs. Frontend is the React app. App will work under a load with peaks in the morning and in the evening about 1000 RPS.
The source code could be found here: https://github.com/creative-co/devops-test-task That’s what you need to do: Try to make the app stable, secure and reliable. We need to place this app in k8s, use in-house DB and should have 2 env (staging and production).Envs are almost the same (the storage volume and the load are different though): Staging server load is five times less than production one. 
PostgreSQL requirements: staging: 256 Mb,production: 512 Mb. Develop IaC: Develop necessary things to deploy and run the apps in k8s.It would be great if you could use Terraform as IaC, Helm and we could deploy it to Minikube. *So, we know that we can’t use AWS for tests, just ignore those things and don’t write AWS-specific code.
You can fork the repo and send us a link to yours, a zip archive with the project, etc.If you have any questions or need some help, please feel free to reach out to us: https://t.me/eliihu.

# Development
Добавил docker compose. Теперь все работает с него.
Так же можно примапить папку на локальной машине и вести разработку не перезапуская контейнеры.
Так же можно вообще перевести разработку на тот же миникуб. Есть инструменты типа Devspace

# Stage
Как я понял по заданию отличается только объемом памяти на PSQL
Реализованно через terraform

# Production
Тоже самое. Отличие только в памяти. Реализованно через terraform
Хотя я бы делал разные контейнеры и включал бы тесты в stage, а в прод отправлял контейнер без тестов.

# Запуск
нужно будет добавить helm repo: 
helm repo add bitnami-pre-2022 https://raw.githubusercontent.com/bitnami/charts/eb5f9a9513d987b519f0ecd732e7031241c50328/bitnami
minikube start --driver=docker --addons=ingress
cd <projectFolder>/task/
terraform init
terrafrom apply
После установки:
minikube tunnel
http://localhost

# Что входит в helm:
1. Добавлена возможность 'postgres кластер' можно маштабировать БД по схеме мастер чтение
2. Добавлена возможность внешней БД (меняется в чарте параметром 'builtin: true')
3. Возможность создать секрет пароля к бд вручную или генерировать
4. Пароль к бд и токен записываем в секреты, если postgresql.postgresPassword = "", то генерируется, если забит просто вставляется, если upgrade то берется имеющийся
6. Добавил джобу для инициализации бд, прав и пользователей. Лучше вынести это из кода "наполнение БД".
7. Добавил ingress. Почему-то работает только на локалхост. Для экспериментов можно переделать на драйвер qemu и vm
8. Добавил сетевые политики для ограничение трафика.

# Что входит в terraform:
1.  Меняем переменную на prod или stage
Будут меняться параметры psql

# Возможные проблемы:
1. Если нет дефолтного сторедж класса в кубере. Может вылететь ошибка. (в миникубе он есть)
нужно будет добавить postgresql.[*].storageClass: ""
2. Если стоит автогенерация admin пароля auth.postgresPassword пустой и вы решили удалить чарт и по новой его установить, не забываем чистить PVС. При upgrade  такой проблемы нет.

# Ошибки:
1. На проде не проходит миграция. На деве работает. Создание ДБ делегировал инитДБ джобе
$ pg-migrations apply --directory dist/db/migrations
No migrations required
После импорт данных проходит как надо
2. Сборка Прод фронта проходит с хаком. Пакеты ставим через дев. Билдим уже прод.
    export NODE_ENV=development
    yarn install
    export NODE_ENV=production
    yarn build
3. ингрес не корректно обрабатывает катсомные имена. Типа такого если прописать в hosts 
127.0.0.1       chart-example.local

# На чем тестировалось:
MacOS Sonoma version:   14.2.1
minikube version:       v1.32.0
helm version:           version.BuildInfo{Version:"v3.14.0", GitCommit:"3fc9f4b2638e76f26739cd77c7017139be81d0ea", GitTreeState:"clean", GoVersion:"go1.21.6"}
docker version:         24.0.7