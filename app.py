    # app.py
from flask import Flask, render_template
import gunicorn
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/profile')
def profile():
    # Load project data from a file or database
    return render_template('profile.html')

@app.route('/experience')
def experience():
    return render_template('experience.html')

@app.route('/education')
def education():
    return render_template('education.html')

@app.route('/skills')
def skills():
    return render_template('core_skills.html')

if __name__ == '__main__':
    app.run(debug=True)
