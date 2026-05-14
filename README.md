# feedsreader-server – api для получения данных rss-фидов
Сервер принимает запросы в формате JSON, в которых массив ссылок на источники rss-фидов, например:<br>
`{
	"rssUrl": [
		"https://3dnews.ru/news/rss/",
		"https://xakep.ru/feed/"
	]
}`

Пример ответа в формате JSON для клиентской части приложения:<br>
![Ответ сервера](https://github.com/odivus/readme-img/blob/b8c984b7649d1987c33d118efc62e33be23745a8/feedsreader-server-response.png)

## Стек
Express, cors, rss-parser, cheerio, needle
