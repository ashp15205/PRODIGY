import os
from dotenv import load_dotenv

load_dotenv()

# Loading the Gemini API key from .env
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
