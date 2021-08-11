# feedsreader-server – серверная часть приложения для чтения rss-фидов
Сервер принимает запросы с телом в формате JSON, в которых массив ссылок на источники rss-фидов, например:<br>
![Post запрос к серверу](https://github.com/odivus/odivus/blob/dd3e54adee8f8b899bab8beb43d919027d8b98c7/img/feedsreader-server-post-body.png)

Ответ приходит в формате JSON, в форме, необходимой для клиентской части приложения, например (фрагмент):<br>
![Ответ сервера](https://github.com/odivus/odivus/blob/3ea3f31c3d6b3a3e77a82aa5636340d4830814e2/img/feedsreader-server-response.png)

## Стек
Express, cors, rss-parser, cheerio, needle
