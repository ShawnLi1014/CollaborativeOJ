import json
import executor_utils as eu

from flask import Flask
from gevent.pywsgi import WSGIServer
from flask import request
from flask import jsonify

app = Flask(__name__)

@app.route("/")
def hello(): 
	return "hello world hhddd"

@app.route("/build_and_run", methods=["POST"])
def build_and_run():
	print(request.data)
	data = json.loads(request.data)
	if 'code' not in data or 'lang' not in data:
		return "You should provide both code and language"
		
	code = data['code']
	lang = data['lang']

	print ("API got called with code" + code + lang)
	result = eu.build_and_run(code, lang)

	return jsonify(result)

# if __name__ == "__main__":
# 	eu.load_image()
# 	app.run()
if __name__ == '__main__':
	# Debug/Development
	# app.run(debug=True, host="0.0.0.0", port="5000")
	# Production
	eu.load_image()
	http_server = WSGIServer(('', 5000), app)
	http_server.serve_forever()
