""" pytests for Flask """

import pytest
from app import app

@pytest.fixture(scope="module")
def client():
    app.config['TESTING'] = True
    return app.test_client()


def test_resource_one_post(client):
    resp = client.post('/api/simdata', {'thing':1})
    assert resp.status_code == 201

def test_resource_one(client):
    resp = client.get('/api/resource/one')
    assert resp.status_code == 200
