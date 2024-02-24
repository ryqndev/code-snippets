
dog_images = [
    'https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg',
    'https://images.dog.ceo/breeds/kelpie/n02105412_1952.jpg',
    'https://images.dog.ceo/breeds/pointer-german/n02100236_5853.jpg'
]

import random

# gets 1 random dog
def get_random_dog_image():
    # generates a random number from 0 -> 3
    random_index = round(random.random() * 2)

    # dog_images[0 -> 3]
    return dog_images[random_index]

# returns our entire list of dogs
def get_all_dogs():
    return dog_images



# print(get_random_dog_image())
