from flask import Flask

app=Flask(__name__)

DB_CONFIG = {
    "host" : "localhost",
    "user" : "root",
    "password" : "root"'
    "database" : "training"
}
@app.route('/')
def Home():
    return "Hello World"


@app.route('/Second')
def Second():
    return "Second Page"

@app.route('/user/username>')
def users(username):
    return f"<h1>Hello {username} Welcome to program"

@app.route('/html')
def html():
    return render_template('index.html')

app.run(debug=True)