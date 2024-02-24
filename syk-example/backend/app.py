from flask import Flask, jsonify
from dog_api import get_random_dog_image, get_all_dogs
from yelp_api import get_all_restaurants_in_area
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/images/random")
def get_random_dog_route():
    # return f"<img src=\"{get_random_dog_image()}\" />"
    return jsonify({"message": get_random_dog_image()})


@app.route("/list/all")
def get_all_dogs_route():
    return jsonify({"message": get_all_dogs()})


@app.route("/restaurants/<location>")
def get_all_restaurants(location):
    return jsonify(get_all_restaurants_in_area(location))

if(__name__ == "__main__"):
    app.run()
