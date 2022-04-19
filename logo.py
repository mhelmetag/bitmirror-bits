# should be 350 x 350

from mirror import Mirror


def main():
    size = 350
    filename = f'misc_images/logo.png'
    mirror = Mirror(size, filename)

    mirror.generate_image()


main()
