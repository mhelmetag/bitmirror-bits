
import json

BASE_NAME = "Bitmirror Bit #"
BASE_IMAGE_URL = "ipfs://QmPeDdobJd5gwe6gYFyt3M9ee374y2Ef3TfNVMLZfz6zyF"
BASE_METADATA = {
    "name": None,
    "description": "Bitmirror Bits is a first ever collection of 100 generative pixel artworks (Bits) created by an advanced algorithm for the Ethereum Blockchain.",
    "image": None,
    "edition": None,
    "attributes": []
}

for i in range(0, 100):
    metadata = BASE_METADATA

    metadata["name"] = f'{BASE_NAME}{i}'
    metadata["edition"] = i
    metadata["image"] = f'{BASE_IMAGE_URL}/{i}.png'

    with open(f'metadata/{i}', 'w') as file:
        json.dump(metadata, file)
