from mirror import Mirror


def main():
    # create 100 images in /images
    # numbered 1..100

    size = 512

    for i in range(0, 100):
        n = i + 1

        print(f'Generating image #{n}')

        filename = f'images/{n}.png'
        mirror = Mirror(size, filename)

        mirror.generate_image()


main()
