# feedsreader-server – серверная часть приложения для чтения rss-фидов
Сервер принимает запросы с телом в формате JSON, в которых массив ссылок на источники rss-фидов, например:<br>
![Post запрос к серверу](https://github.com/odivus/readme-img/blob/b8c984b7649d1987c33d118efc62e33be23745a8/feedsreader-server-post-body.png)

Ответ приходит в формате JSON, в форме, необходимой для клиентской части приложения, например (фрагмент):<br>
![Ответ сервера](https://github.com/odivus/readme-img/blob/b8c984b7649d1987c33d118efc62e33be23745a8/feedsreader-server-response.png)

## Стек
Express, cors, rss-parser, cheerio, needle
