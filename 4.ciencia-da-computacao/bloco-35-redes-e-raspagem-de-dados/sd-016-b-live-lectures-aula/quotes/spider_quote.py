from parsel import Selector
import requests


def fetch_content(url: str, wait: int = 1) -> str:
    try:
        response = requests.get(url, timeout=wait)
        response.raise_for_status()
    except (requests.HTTPError, requests.ReadTimeout):
        return ""
    else:
        return response.text


def extract_quotes(text: str) -> list:
    selector = Selector(text)
    quotes = []
    for quote in selector.css("div.quote"):
        text = quote.css("span.text::text").get()
        author = quote.css("small.author::text").get()
        tags = quote.css("a.tag::text").getall()
        quotes.append(
            {
                "text": text,
                "author": author,
                "tags": tags,
            }
        )

    return quotes


def get_all_quotes() -> list:
    base_url = "https://quotes.toscrape.com"
    next_page = "/"
    quotes = []
    while next_page:
        content = fetch_content(base_url + next_page)
        quotes.extend(extract_quotes(content))
        next_page = Selector(content).css("li.next > a::attr(href)").get()
    return quotes


if __name__ == "__main__":
    # page_content = fetch_content("https://quotes.toscrape.com/")
    # quotes = extract_quotes(page_content)
    quotes = get_all_quotes()
    print(quotes)
