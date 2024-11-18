from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api, reqparse, fields, marshal_with, abort
from flask_cors import CORS
from flask_migrate import Migrate



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'postgresql://postgres:karate@localhost/noteAPP'
db = SQLAlchemy(app)
api = Api(app)
CORS(app)
migrate = Migrate(app,db)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nick = db.Column(db.String(50), unique=True ,nullable=False)
    password = db.Column(db.String(50) ,nullable=False)
    permissions = db.Column(db.String(50) ,nullable=False)

    def __repr__(self):
        return f"User(nick= {self.nick}, password = {self.password}, permissions = {self.permissions} )"
    
class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50) ,nullable=False)
    text = db.Column(db.String(50) ,nullable=False)
    isDone = db.Column(db.Boolean, nullable=False, default=False)
    

# with app.app_context():
#     db.create_all()


user_args = reqparse.RequestParser()
user_args.add_argument('nick', type=str, required=True, help='Name cannot be blank')
user_args.add_argument('password', type=str, required=True, help='password cannot be blank')
user_args.add_argument('permissions', type=str, required=True, help='permissions cannot be blank')

userFields = {
    'id':fields.Integer,
    'nick':fields.String,
    'password':fields.String,
    'permissions':fields.String,
}

note_args = reqparse.RequestParser()
note_args.add_argument('title',type=str, required=True, help='Title cannot be blank')
note_args.add_argument('text',type=str, required=True, help='Text cannot be blank')



noteFields = {
    'id':fields.Integer,
    'title':fields.String,
    'text':fields.String,
    'isDone': fields.Boolean
}

# NOTATKI

class Notes(Resource):
    @marshal_with(noteFields)
    def get(self):
        note = Note.query.all()
        return note
    
    @marshal_with(noteFields)
    def post(self):
        args = note_args.parse_args()
        note = Note(title=args['title'],text=args['text'],isDone=False)
        db.session.add(note)
        db.session.commit()
        note = Note.query.all()
        return note , 201

class NoteOne(Resource):
        @marshal_with(noteFields)
        def get(self,id):
            note = Note.query.filter_by(id=id).first()
            if not note:
                abort(404,'Taka notatka nie istnieje')
            return note
# AKTUALIZACJA
        @marshal_with(noteFields)
        def patch(self,id):
            args = note_args.parse_args()
            note = Note.query.filter_by(id=id).first()
            if not note:
                abort(404, "Notatka nie znaleziony")
            note.title = args['title']
            note.text = args['text']
            note.isDone = False
            db.session.commit()
            return note
        
        # USUWANIE
       
        @marshal_with(noteFields)
        def delete(self,id):
            note = Note.query.filter_by(id=id).first()
            if not note:
                abort(404, "Notatka nie znaleziony")
            db.session.delete(note)
            db.session.commit()
            note = Note.query.all()
            return note

api.add_resource(Notes, '/api/notes')
api.add_resource(NoteOne, '/api/note/<int:id>')


# USERS

# POBIERANIE DANYNCH ZE ŚCIEŻKI
class Uzytkownicy(Resource):
    @marshal_with(userFields)
    def get(self):
        uzytkownicy = User.query.all()
        return uzytkownicy
    # wysyłanie
    @marshal_with(userFields)
    def post(self):
        args = user_args.parse_args()
        user = User(nick=args['nick'], password=args['password'], permissions=args['permissions'] )
        db.session.add(user)
        db.session.commit()
        uzytkownicy = User.query.all()
        return uzytkownicy, 201
    

class Uzytkownik(Resource):
        # pobieranie uzytkownika z dantym id
        @marshal_with(userFields)
        def get(self,id):
            user = User.query.filter_by(id=id).first()
            if not user:
                abort(404, "Uzytkownik nie znaleziony")
            return user
        
# AKTUALIZACJA
        @marshal_with(userFields)
        def patch(self,id):
            args = user_args.parse_args()
            user = User.query.filter_by(id=id).first()
            if not user:
                abort(404, "Uzytkownik nie znaleziony")
            user.nick = args['nick']
            user.password = args['password']
            user.permissions = args['permissions']
            db.session.commit()
            return user
        
        # USUWANIE
       
        @marshal_with(userFields)
        def delete(self,id):
            user = User.query.filter_by(id=id).first()
            if not user:
                abort(404, "Uzytkownik nie znaleziony")
            db.session.delete(user)
            db.session.commit()
            uzytkownicy = User.query.all()
            return uzytkownicy
            


api.add_resource(Uzytkownicy, '/api/users')
api.add_resource(Uzytkownik, '/api/user/<int:id>')



@app.route('/')
def index():
    return '<h1>siema</h1>'