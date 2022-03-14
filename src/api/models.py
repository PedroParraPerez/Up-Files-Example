from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    files = db.Column(db.String(240), unique=False, nullable=True)

    def __repr__(self):
        return '<Member %r>' % self.usermember

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            'files': self.files,
        }