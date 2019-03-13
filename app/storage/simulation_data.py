from mongoengine import *
import os
connect(
    db=os.environ['DB_NAME'],
    username=os.environ['MONGO_USER'],
    password=os.environ['MONGO_PASSWORD'],
    host=os.environ['MONGO_HOST'],
    port=int(os.environ['MONGO_PORT'])
)

class Simulation(Document):
    label = StringField(indexed=True)
    date = DateField()
    data = DictField()