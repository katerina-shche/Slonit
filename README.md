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
- git commit -m 'here we write our commit message' (флаг -m позволяет передавать описание комита сразу, а не добавлять его позднее в текстовом редакторе)

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

git не умеет добавлять пустые дирректории (**git add** не сработает), чтоб сохранить новую дирректорию нужно сразу создать в ней рабочий файл, или вспомогательный файл **.gitkeeper** Затем можно добавить всю дирректорию с помощью **git add .**

Если случайно добавилив индекс ненужные фалы можно их убрать:

- git reset HEAD .DS_Store

в идеале добавлять ненужные файлы в .gitignore в корне проекта или на всем компьютере: 

echo ".DS_Store" >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
### 2.6. Хороший коммит

***Atomic and consistent***

Хороший коммит должен быть атомарным (1 отдельная вещь: feature/fix) и консистентным (завершенным), т.е. всё должно работать исправно до и после комитта.

***Commit early. Commit often.***

Так чтобы легко можно был сделать откат. 

Хорошее описание комитта - деает его понятным комадне и тебе самому даже вчерез 100 лет.

### 2.7. Зачем нужен индекс?

Двухступенчатая система сохранения, при этом мы можем выбрать не только  отдельные файлы или дирректории, но и отдельные фрагменты в рамках одного файла, если они были в разных локальных сохранениях <kbd>Command<kbd>+<kbd>S<kbd>, для этого используем флаг *-p*

- git add -p index.html

\```
ekaterina@Ekaterinas-MacBook-Air Slonit % git add -p hello.html
diff --git a/hello.html b/hello.html
index 30f25bf..87552ca 100644
--- a/hello.html
+++ b/hello.html
@@ -9,7 +9,7 @@
 </head>
 <body>
     <header>
-        <h1>Welcome to Slonit!!!</h1>
+        <h1>Welcome to Slonit!!! Проверяем флаг -p </h1>
         <p>first change</p>
     </header>
     <main>
(1/2) Stage this hunk [y,n,q,a,d,j,J,g,/,e,?]?
\```

выбираем опции **y = yes**, **n=no**, затем переходим к следующему фрагменту кода.
**?=** показать значение всех опций

\```
@@ -21,7 +21,6 @@
     <script>
         helloGitty();
     </script>
-    <p>...Unfinished changes 2...</p> 
-    <p>...Unfinished changes 3...</p>
+    <p>...а тут у нас второй hunk...</p> 
 </body>
 </html>
\ No newline at end of file
(2/2) Stage this hunk [y,n,q,a,d,K,g,/,e,?]? n
\```

### 2.8. Комиты без git add
### 2.9. Удаление и переименование файлов
