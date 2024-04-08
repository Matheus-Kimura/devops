from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localHost.triangolo.com",
    "https://localhost.triangolo.com",
    "http://localhost",
    "http://127.0.0.1:8000",
    "http://127.0.0.1:3000",
    "http://localhost:8000",
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
    return n1 + n2