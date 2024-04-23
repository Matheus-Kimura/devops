import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

frontend_url_cross = os.environ.get("FRONTEND_URL_CROSS")

origins = [
    "http://localHost.triangolo.com",
    "https://localhost.triangolo.com",
    f"https://{frontend_url_cross}",
    "http://127.0.0.1:3000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/sum/{n1}/{n2}")
async def sum(n1: int, n2: int):
    return {"result":n1 + n2}