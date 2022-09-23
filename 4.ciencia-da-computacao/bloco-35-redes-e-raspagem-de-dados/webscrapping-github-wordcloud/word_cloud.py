from wordcloud import WordCloud
import numpy as np
from PIL import Image


def main():
    with open('output/pulls.txt') as file:
        data = file.read()

    mask = np.array(Image.open("mask.png"))

    wordcloud_generator = WordCloud(
        mask=mask,
        contour_color='yellow',
        contour_width=5
    )
    result = wordcloud_generator.generate(data)

    result.to_file('output/wordcloud.png')


if __name__ == "__main__":
    main()