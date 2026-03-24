
from flask import Flask, render_template
import gunicorn
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def projects():
    # Load project data from a file or database
    return render_template('projects.html')

@app.route('/about')
def about():
    return render_template('about.html')

# @app.route('/education')
# def education():
#     return render_template('education.html')

@app.route('/experience')
def experience():
    return render_template('experience.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

if __name__ == '__main__':
    app.run(debug=True)
