from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer, util

app = FastAPI()
model = SentenceTransformer('all-MiniLM-L6-v2')

class ScoreRequest(BaseModel):
    cv: str
    job: str

@app.post("/score")
def score(request: ScoreRequest):
    a = model.encode(request.cv)
    b = model.encode(request.job)
    similarity = util.cos_sim(a, b).item()
    return { "score": round(similarity * 100) }