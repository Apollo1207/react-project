import json
from flask import Flask, redirect, render_template, \
    request, jsonify, make_response, abort, url_for
from flask_cors import cross_origin
from marshmallow import fields
from marshmallow_sqlalchemy import ModelSchema
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
import time

with open("secret.json") as f:
    SECRET = json.load(f)

DB_URI = "mysql+mysqlconnector://{user}:{password}@{host}:{port}/{db}".format(
    user=SECRET["user"],
    password=SECRET["password"],
    host=SECRET["host"],
    port=SECRET["port"],
    db=SECRET["db"])

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SQLALCHEMY_DATABASE_URI"] = DB_URI
db = SQLAlchemy(app)
ma = Marshmallow(app)


class SportBuild(db.Model):
    id = db.Column(db.Integer, unique=True, primary_key=True)
    number_of_seats = db.Column(db.Integer, unique=False)
    year_of_foundation = db.Column(db.Integer, unique=False)
    location = db.Column(db.String(30), unique=False)
    scale_of_field = db.Column(db.Integer, unique=False)
    name_of_sport = db.Column(db.String(30), unique=False)

    def __str__(self):
        return f"NumberOfSeats:{self.number_of_seats} YearOfFoundation:{self.year_of_foundation}" \
               f" Location:{self.location} ScaleOfField:{self.scale_of_field} NameOfSport:" \
               f"{self.name_of_sport} "


class SportBuildSchema(ma.Schema):
    class Meta:
        fields = ('id', 'number_of_seats', 'year_of_foundation',
                  'location', 'scale_of_field', 'name_of_sport')


sport_build_schema = SportBuildSchema()
sport_builds_schema = SportBuildSchema(many=True)


@app.route("/sportBuilds", methods=["GET"])
@cross_origin()
def get_all_sport_builds():
    time.sleep(2)
    all_sport_builds = SportBuild.query.all()
    sport_builds = sport_builds_schema.dump(all_sport_builds)
    if not sport_builds:
        abort(404)
    return jsonify(sport_builds)


@app.route("/sportBuilds/<id>", methods=["GET"])
@cross_origin()
def get_sport_build_by_id(id):
    time.sleep(2)
    sport_build = SportBuild.query.get(id)
    if not sport_build:
        abort(404)
    return sport_build_schema.jsonify(sport_build)


@app.route("/sportBuilds/search/<search>", methods=["GET"])
@cross_origin()
def get_sport_build_by_search(search):
    if search == "Sport Build":
        all_sport_builds = SportBuild.query.all()
        sport_builds = sport_builds_schema.dump(all_sport_builds)
        return jsonify(sport_builds)
    sport_build = SportBuild.query.filter(SportBuild.name_of_sport == search)
    if not sport_build:
        return jsonify({})
    result = sport_builds_schema.dump(sport_build)
    return jsonify(result)


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True, host="127.0.0.1", port="5000")
