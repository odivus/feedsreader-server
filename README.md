# feedsreader-server – api для получения данных rss-фидов
Сервер https://feedsreader-server.vercel.app/data принимает POST-запросы с JSON, в которых массив ссылок на источники rss-фидов, например:<br>
`{
	"rssUrl": [
		"https://3dnews.ru/news/rss/",
		"https://xakep.ru/feed/"
	]
}`

В ответе возвращает данные rss источников, переданных в запросе, для клиентской части приложения, например:<br>
![Ответ сервера](https://github.com/odivus/readme-img/blob/b8c984b7649d1987c33d118efc62e33be23745a8/feedsreader-server-response.png)

## Стек
Express, cors, rss-parser, cheerio, needle
