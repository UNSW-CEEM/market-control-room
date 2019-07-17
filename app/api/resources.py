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


# Retrieves all unarchived simulations.
# @api_rest.route('/simdata/list')
# class SimData(Resource):
#     """ Unsecure Resource Class: Inherit from Resource """

#     def get(self):
#         req = Simulation.objects().fields(label=1)
#         sims = []
#         for s in req:
#             if 'archived' not in s['data']:
#                 sims.append({'label':s.label, 'id':str(s.id)})
#             else:
#                 if s['data']['archived'] == False:
#                     sims.append({'label':s.label, 'id':str(s.id)})

#         return jsonify(sims)

# Retrieves all simulations (archived and unarchived.)
@api_rest.route('/simdata/list')
class SimData(Resource):
    """ Unsecure Resource Class: Inherit from Resource """

    def get(self):
        req = Simulation.objects().fields(label=1, id=1, archived=1)
        sims = [{'label':s.label, 'archived':s.archived, 'id':str(s.id)} for s in req]
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

@api_rest.route('/simdata/<string:resource_id>/label')
class SimLabel(Resource):
    """ Unsecure Resource Class: Inherit from Resource """

    def post(self, resource_id):
        
        json_payload = request.data
        data = json.loads(request.data)
        save_label(data['label'], resource_id)
        return jsonify({'success':True})

@api_rest.route('/simdata/<string:resource_id>/archive')
class SimArchive(Resource):
    """ Unsecure Resource Class: Inherit from Resource """

    def post(self, resource_id):
        archive( resource_id)
        return jsonify({'success':True})

@api_rest.route('/simdata/<string:resource_id>/unarchive')
class SimUnArchive(Resource):
    """ Unsecure Resource Class: Inherit from Resource """

    def post(self, resource_id):
        unarchive( resource_id)
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

def save_label(label, sim_id):
        req = Simulation.objects.get(id=sim_id) 
        req.data['label'] = label
        Simulation.objects(id=sim_id).update_one(data=req.data, label=label)

        print("Label Updated")

def archive(sim_id):
        # req = Simulation.objects.get(id=sim_id) 
        # req.data['archived'] = True
        Simulation.objects(id=sim_id).update_one(archived=True)
        print("Archived", sim_id)

def unarchive(sim_id):
        # req = Simulation.objects.get(id=sim_id) 
        # req.update(archived=archived)
        # req.data['archived'] = False
        Simulation.objects(id=sim_id).update_one(archived=False)
        print("Un-Archived", sim_id)





@api_rest.route('/secure-resource/<string:resource_id>')
class SecureResourceOne(SecureResource):
    """ Unsecure Resource Class: Inherit from Resource """

    def get(self, resource_id):
        timestamp = datetime.utcnow().isoformat()
        return {'timestamp': timestamp}
