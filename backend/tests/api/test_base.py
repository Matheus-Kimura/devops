from fastapi.testclient import TestClient

def test_get_root(client: TestClient) -> None:
    # parameter
    n1 = 10; n2 = 5
    
    response = client.get(f'/sum/{n1}/{n2}')
    body = response.json()
    
    assert response.status_code == 200
    assert 'result' in body
    assert body['result'] == (n1 + n2)