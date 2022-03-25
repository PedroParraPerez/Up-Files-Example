from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    race = db.Column(db.String(80), unique=False, nullable=True)
    image = db.Column(db.String(240), unique=False, nullable=True)

    def __repr__(self):
        return '<Member %r>' % self.usermember

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "race": self.race,
            'image': self.image
        }
