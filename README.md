# Git 
![git logo](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1920px-Git-logo.svg.png)
## 1. Введение
### 1.1. Что такое Git? 

- Хранилище истории разработки проекта
- Обмен историей разработки
    - ... и интеграция изменений
- Распределенная система 
    - ... с необязательным сервером
- Надёжная система
    - контрольные суммы
    - история есть у всех

[Подробный тьюториал тут](https://www.youtube.com/watch?v=W4hoc24K93E&list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&index=2 "видео на ютюб")

#### Установка Git

- Linux:
    - apt-get install git
    - yam install git
    - ...
- Mac
    - Terminal / iTerm:
        - git
    - Homebrew / Macports

## 2. Основы Git
### 2.1. Конфигурация
- git config
- git config user.name "Ekaterina Shchekotikhina"
- git config user.email asti.katerina@gmail.com

Эти настройи лучше делать глобальными, а не для каждого проекта:

- git config --global user.name "Ekaterina Shchekotikhina"
- git config --global user.email asti.katerina@gmail.com
- git config --global alias.sayhi '!echo "hello"; echo "from git"' (теперь можно использовать git sayhi)

### 2.2. Создание репозитория, первый коммит
- git init 
- git status
- git add . | git add index.html 
- git commit -m 'here we write our commit message'

### 2.3. Git и права на файлы

Исполнимый (100644) и неисполнимый (100744) файл

- chmod +x index.html | chmod -x index.html

### 2.4. Git show, кто такие авторы и коммитер

Отображение информации по коммиту: 

- git show
- git show --pretty=fuller

Изменение данных комитера: 

- git commit --author='Santa Clause <santa@me.com>' --date='01.01.2025'

### 2.5. Добавление файлов и директорий, git status

git не умеет добавлять пустые дирректории (**git add** не сработает), чтоб сохранить новую дирректорию нужно сразу создать в ней рабочий файл, или вспомогательный файл **.gitkeeper**

### 2.6. Хороший коммит
### 2.7. Зачем нужен индекс?
### 2.8. Комиты без git add
### 2.9. Удаление и переименование файлов
