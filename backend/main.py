from flask_api import FlaskAPI
app = FlaskAPI(__name__)

# disable browsable api
app.config['DEFAULT_RENDERERS'] = [
    'flask_api.renderers.JSONRenderer'
]

@app.route('/')
def hello_world():
    return {'msg': 'hello world'}

