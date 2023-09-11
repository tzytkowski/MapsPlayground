from flask import Flask, render_template, jsonify
import requests
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_air_quality', methods=['POST'])
def get_air_quality():
    # Define the URL and request data as you did in your Python code
    url = "https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyBrJ554PTXvcs0wARbCs74L7_ou8DuojYE"
    request_data = {
        "location": {
            "latitude": 37.7749,
            "longitude": -122.4194
        },
        "includeAqis": ["US_AQI"],
        "includePollutants": ["PM2.5", "PM10", "CO", "NO2"],
        "includeHealthRecommendations": True
    }

    # Convert the request data to JSON format
    json_data = json.dumps(request_data)

    # Set the headers
    headers = {
        "Content-Type": "application/json"
    }

    # Send the HTTP POST request
    response = requests.post(url, data=json_data, headers=headers)

    # Handle the response and return JSON data
    if response.status_code == 200:
        air_quality_data = response.json()
        return jsonify(air_quality_data)
    else:
        return jsonify({"error": "Error in API request"}), 500

if __name__ == '__main__':
    app.run(debug=True)