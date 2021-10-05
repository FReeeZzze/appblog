# app-blog

## Руководство по API

> Method: POST
- /api/auth/register

    Регистрация пользователя и его аутентификация

    headers: { "Content-Type": "application/json" }

    body: {
        "email": "your_email@gmail.com",
        "name": "your_name",
        "password": "your_password"
    }

    `Примечание`: При регистрации создается токен на 1час

    `success return`:

        {
            "message": "Пользователь создан!",
            "status": "success",
            "token": "generated token",
            "userId": "615c4eb12a13a43b78511cbc"
        }

    `warn return`: 

        {
            "errors": [
                {
                    "value": "",
                    "msg": "Некорректный email",
                    "param": "email",
                    "location": "body"
                },
                {
                    "value": "",
                    "msg": "Минимальная длинна пароля 6 символов",
                    "param": "password",
                    "location": "body"
                }
            ],
            "message": "Некорректные данные при регистрации"
        }

> Method: POST
- /api/auth/login

    Аутентификация пользователя благодаря вводимым полям (email, password)

    headers: { "Content-Type": "application/json", "Authorization": "Bearer `${your_token}`" }

    body: {
        "email": "your_email@gmail.com",
        "password": "your_password"
    }

    `success return`:

        {
            "token": "token",
            "userId": "615c4eb12a13a43b78511cbc",
            "message": "Вы авторизованы!",
            "status": "success"
        }

    `warn return`: 

        {
            "message": "Нет авторизации"
        }

            or

        {
            "message": "Пользователь не найден!"
        }

            or
        
        {
            "message": "Неверный пароль, попробуйте снова"
        }

> Method: GET
- /api/user/me

    Выдает в качестве результата все поля аутентифицированного пользователя

    headers: { "Authorization": "Bearer `${your_token}`"}

    `success return`:

        "result": {
            "_id": "615c4eb12a13a43b78511cbc",
            "email": "email@gmail.com",
            "name": "Name",
            "avatar": "url avatar"
        },
        "status": "success"

    `warn return`: 

        {
            "message": "Нет авторизации"
        }

> Method: GET
- /api/posts

    Показывает первый пост первой страницы

    Аналог - `/api/posts/:page`

    `return` всегда возвращает первую страницу

> Method: GET
- /api/posts/:page

    Показывает посты на текущей странице, благодаря вводимому параметру `:page` для URI строки

    `example`:  /api/posts/2

    `return`:  вернет вторую страницу с постами если она существует

    `success return`:

        {
            "results": [{...item}, {...item}],
            "pagination": {
                "itemsPerPage": 20,
                "totalCount": 44,
                "currentPage": 2,
                "prevPage": 1,
                "nextPage": 3,
                "pageCount": 3
            }
        }

    `warn return`:

        {
            "message": "Такой страницы нет",
            "status": "warn"
        }


> Method: POST
- /api/posts

    Создает новый пост c двумя полями (title, text) передаваемыми в тело, автором которого будет текущий аутентифицированный пользователь
    
    headers: { "Content-Type": "application/json", "Authorization": "Bearer `${your_token}`"}

    body: {
        "title": "Заголовок поста",
        "text": "сообщение поста"
    }

    `success return`:

        {
            "_id": "615c78b7810f04001bc117c6",
            "title": "Без заголовка",
            "text": "текст...",
            "author": "615c4eb12a13a43b78511cbc",
            "updatedAt": "2021-10-05T16:09:27.036Z",
            "createdAt": "2021-10-05T16:09:27.036Z",
            "__v": 0
        }

    `warn return`:

        {
            "message": "Нет авторизации"
        }

            or
        
        {
            "status": "warn",
            "message": "Вы не заполнили поле текст"
        }

> Method: POST
- /api/files

    Создает новый файл на сервере, автором которого будет текущий аутентифицированный пользователь

    headers: { "Content-Type": "multipart/form-data", "Authorization": "Bearer `${your_token}`"}

    body: `form-data` with name `fileData`

    Создает новый файл текущего аутентифицированного пользователя

    `success return`:

        {
            "status": "success",
            "file": {
                "_id": "615c59767986b834c0e5e848",
                "filename": "previewfile.jpg",
                "size": 517287,
                "ext": "jpg",
                "url": "public\\uploads\\fileData-1633442166153f2b1bfa9\\image-jpeg\\fileData-1633442166153f2b1bfa9.jpg",
                "user": "615c4eb12a13a43b78511cbc",
                "updatedAt": "2021-10-05T13:56:06.168Z",
                "createdAt": "2021-10-05T13:56:06.168Z",
                "__v": 0
            }
        }

    `warn return`

        {
            "message": "Нет авторизации"
        }

        or 

        {
            message: some error message server
        }
