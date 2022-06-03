
import json

BASE_NAME = "Bitmirror Bit #"
BASE_IMAGE_URL = "ipfs://QmYECQj3kU7uZB6Lzq1aQLBGSfREaYKwLRUSXNsJWdPr7G"
BASE_METADATA = {
    "name": None,
    "description": "Bitmirror Bits is a first ever collection of 100 generative pixel artworks (Bits) created by an advanced algorithm for the Ethereum Blockchain.",
    "image": None,
    "edition": None,
    "attributes": []
}

for i in range(0, 100):
    n = i + 1

    metadata = BASE_METADATA

    metadata["name"] = f'{BASE_NAME}{n}'
    metadata["edition"] = n
    metadata["image"] = f'{BASE_IMAGE_URL}/{n}.png'

    with open(f'metadata/{n}', 'w') as file:
        json.dump(metadata, file)
