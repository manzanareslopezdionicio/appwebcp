from flask import Flask, redirect, url_for
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/nosotros/')
def nosotros():
    return render_template('nosotros.html')

@app.route('/form/')
def form():
    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)
