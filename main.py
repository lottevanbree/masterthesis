import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    # Set the environment variable for the Google Cloud Storage bucket name
    os.environ['GOOGLE_CLOUD_STORAGE_BUCKET'] = 'eu.artifacts.masterthesis-survey.appspot.com'
    
    # Run the app on port 5432
    app.run(host='0.0.0.0', port=5432)
