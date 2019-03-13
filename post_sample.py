import requests
import json
import pendulum
requests.post('http://localhost:5000/api/simdata', data=json.dumps({
    'label':'TestSim '+str(pendulum.now().format('ddd HH:mm')),
    'hyperparameters':{
        'alpha':1,
        'beta':2,
    }
}))