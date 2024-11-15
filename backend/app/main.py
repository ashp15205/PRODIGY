from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from app.content_curation import generate_content, evaluate_response, generate_feedback, predict_performance
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS setup to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000/"],  # Allows all origins for development purposes
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

class UserInput(BaseModel):
    message: str

class UserData(BaseModel):
    strengths: str
    weaknesses: str
    suggested_content: str
    progress: str
    predicted_score: float
    current_module: str

@app.post("/chat", response_model=UserData)
async def chat(user_input: UserInput):
    message = user_input.message
    content = generate_content(message)
    evaluation = evaluate_response(message)
    feedback = generate_feedback(evaluation)
    performance = predict_performance(content, evaluation)

    return UserData(
        strengths=feedback["strengths"],
        weaknesses=feedback["weaknesses"],
        suggested_content=content,
        progress=performance["progress"],
        predicted_score=performance["predicted_score"],
        current_module=performance["current_module"]
    )
