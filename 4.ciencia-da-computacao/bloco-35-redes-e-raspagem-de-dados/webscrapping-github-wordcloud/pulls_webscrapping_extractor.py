from cgitb import text
from select import select
import requests
from time import sleep
from parsel import Selector


def fetch(url):
    response = requests.get(url)
    response.raise_for_status()

    sleep(1)

    return response.text


def get_pulls_names(html_content):
    selector = Selector(text=html_content)

    pulls_names = selector.css(
        ".Link--primary.js-navigation-open.markdown-title ::text"
        ).getall()

    return pulls_names


def get_next_page(html_content):
    selector = Selector(text=html_content)
    next_page_url = selector.css(
        "div.paginate-container.d-none.d-sm-flex.flex-sm-justify-center "
        "> div > a.next_page ::attr(href)"
    ).get()

    return next_page_url


GITHUB_BASE = "https://www.github.com"


def main():
    repo = "python/cpython"
    url = f"{GITHUB_BASE}/{repo}/pulls"

    pulls_names = []

    count = 0
    while url and count < 3:
        print("Pegando: ", url)
        html = fetch(url)

        pulls_names.extend(
            get_pulls_names(html)
            )

        url = f"{GITHUB_BASE}/{get_next_page(html)}"
        count += 1

    with open('output/pulls.txt', 'w') as file:
        data = "\n".join(pulls_names)
        file.write(data)

    print("Gravados: ", len(pulls_names))


if __name__ == "__main__":
    main()
