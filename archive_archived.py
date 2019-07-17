from app.storage.simulation_data import Simulation

request = Simulation.objects()

for r in request:
    archived = False
    if 'archived' in r['data']:
        archived = r['data']['archived']
    r.update(archived=archived)