"""
REST API Resource Routing
http://flask-restplus.readthedocs.io
"""

from datetime import datetime
from flask import request, jsonify
from flask_restplus import Resource

from .security import require_auth
from . import api_rest
import json
import pendulum
from app.notifications.slack import send_slack_notification, send_notes_slack_notification

from app.storage.simulation_data import Simulation


class SecureResource(Resource):
    """ Calls require_auth decorator on all requests """
    method_decorators = [require_auth]

@api_rest.route('/simdata/list')
class SimData(Resource):
    """ Unsecure Resource Class: Inherit from Resource """

    def get(self):
        req = Simulation.objects()
        sims = [{'label':s.label, 'id':str(s.id)} for s in req]
        return jsonify(sims)
        
@api_rest.route('/simdata/<string:resource_id>')
class SimData(Resource):
    """ Unsecure Resource Class: Inherit from Resource """

    def get(self, resource_id):
        timestamp = datetime.utcnow().isoformat()
        req = Simulation.objects.get(id=resource_id)

        return jsonify(req.data)

@api_rest.route('/simdata/<string:resource_id>/notes')
class SimDataNotes(Resource):
    """ Unsecure Resource Class: Inherit from Resource """

    def post(self, resource_id):
        
        json_payload = request.data
        data = json.loads(request.data)
        save_notes(data['notes'], resource_id)
        return jsonify({'success':True})

@api_rest.route('/simdata')
class SimData(Resource):
    """ Unsecure Resource Class: Inherit from Resource """

    def post(self):
        print("POST REQUEST")
        json_payload = request.data
        data = json.loads(request.data)
        
        save_request(data)
        return {'success': 'true'}, 201

def save_request(data):
        sim = Simulation(data['label'], pendulum.now(), data)
        sim.save()
        print("Saved.")
        send_slack_notification(data['label'], "https://deeplearninglog.herokuapp.com/#/summary/"+str(sim.id))
        print("Simulation Saved")

def save_notes(notes, sim_id):
        req = Simulation.objects.get(id=sim_id)
        updated=False
        if 'notes' in req.data:
            updated = True
        
        req.data['notes'] = notes
        Simulation.objects(id=sim_id).update_one(data=req.data)

        
        send_notes_slack_notification(req['label'], "https://deeplearninglog.herokuapp.com/#/summary/"+str(req.id), notes, updated)
        
        print("Simulation Saved")



@api_rest.route('/secure-resource/<string:resource_id>')
class SecureResourceOne(SecureResource):
    """ Unsecure Resource Class: Inherit from Resource """

    def get(self, resource_id):
        timestamp = datetime.utcnow().isoformat()
        return {'timestamp': timestamp}
