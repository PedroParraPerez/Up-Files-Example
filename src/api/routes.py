"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Member
from api.utils import generate_sitemap, APIException


import cloudinary
import cloudinary.uploader
import cloudinary.api



api = Blueprint('api', __name__)



@api.route('/upload-image', methods=['POST'])
def upload_files():
    cloudinary.config(
        cloud_name = 'dqhlna24b',
        api_key='785699686264573',
        api_secret='IEigIKmf9mWFvQG9jk87DYO39eo'
    )

    file_to_upload = request.files.get('file')
    # name = request.json.get('name')
    # race = request.json.get('race')


    upload_result = None

    if file_to_upload:
        upload_result = cloudinary.uploader.upload(file_to_upload)      
        if upload_result:
            imageAnimal = upload_result.get('secure_url')
            member = Member(
                image = imageAnimal,
                # name = name,
                # race = race
                )
                
            try:
                db.session.add(member)
                db.session.commit()
                return jsonify({'results':member.serialize()}), 200

            except Exception as err:
                print(str(err))
                return jsonify({'message': str(err)}), 500


@api.route('/get-image', methods=['GET'])
def get_image():
    members = Member.query.all()
    return jsonify({'results': list(map(lambda member: member.serialize(), members))}),200



           


