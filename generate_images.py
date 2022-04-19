from mirror import Mirror


def main():
    # create 100 images in /images
    # numbered 1..100

    size = 512

    for i in range(0, 100):
        print(f'Generating image #{i}')

        filename = f'images/{i}.png'
        mirror = Mirror(size, filename)

        mirror.generate_image()


main()
