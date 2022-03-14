"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Member
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)



@api.route('/memberlist', methods=['GET'])
def getMemberInfo():
    members = Member.query.all()
    return jsonify({'results': list(map(lambda member: member.serialize(), members))}),200

    