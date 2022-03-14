"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Member
from api.utils import generate_sitemap, APIException


import cloudinary
import cloudinary.uploader
import cloudinary.api
import os


api = Blueprint('api', __name__)



@api.route('/upload-image', methods=['POST'])
def upload_files():

    
    cloudinary.config(
        cloud_name = os.getenv('CLOUD_NAME'),
        api_key=os.getenv('API_KEY'),
        api_secret=os.getenv('API_SECRET')
    )

    name = request.form.get('name', None)
    race = request.form.get('race', None)
    
    upload_result = None

    file_to_upload = request.files.get('file')
    if file_to_upload:
        upload_result = cloudinary.uploader.upload(file_to_upload)      
        if upload_result:
            imageAnimal = upload_result.get('secure_url')
        

            
            member = Member(
                name = name,
                race = race,
                image = imageAnimal
                )

            try:
                db.session.add(member)
                db.session.commit()
                return jsonify({'results':member.serialize()}), 200

            except Exception as err:
                print(str(err))
                return jsonify({'message': str(err)}), 500



    return jsonify(''), 200
    
    # files = request.files
    # for file_Key in files: 
    #     filo_to_upload = files.get(file_Key)
    #     print('%s file_to_upload', filo_to_upload)
    #     if filo_to_upload:
    #         upload_result = cloudinary.uploader.upload(filo_to_upload)
    #         if upload_result:
    #             member = Member(
    #                 name = request.form.get('name'),
    #                 race = request.form.get('race'),
    #                 image = upload_result.get('secure_url')

    #             )
    #             member.save()
    #         print(upload_result)
    #         return jsonify(upload_result)

           


