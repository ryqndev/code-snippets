import requests

def get_all_restaurants_in_area(location):
    url = "https://api.yelp.com/v3/businesses/search"

    querystring = {"location": location, "term": "pho"}

    payload = ""
    headers = {
        "User-Agent": "insomnia/8.4.5",
        "Authorization": "Bearer DXB4tAi55GDVyUItVE1oGHJqoHHgzv4UNrP3O-O8_o-QYYpu9033jnBmwJqBQ7pcaIWCClhPaxOckQFHUjoXQQIBDKYws8_MasoHCyPZMa_rgkB3sFokOep8aPc-ZXYx"
    }

    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

    return response.json()

# text = '{ businesses: [{ name: "baekjeong", location: "irvbine"}]}'

# json = { "businesses": [{ "name": "baekjeong", "location": "irvbine"}]}

# json.businesses[0].name # baekjeong


# print(get_all_restaurants_in_area("irvine"))
# print(get_all_restaurants_in_area("new york city"))