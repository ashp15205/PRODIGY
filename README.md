## PRODIGY - AN ADAPTIVE LEARNING PLATFORM

**PROBLEM STATEMENT:**
Current e-learning systems often deliver the same content to all users, regardless of their unique learning needs and capabilities. This one-size-fits-all approach can hinder effective learning and fails to address individual strengths, weaknesses, and progress levels.

**SOLUTION:**
Prodigy is an AI-powered web application designed to personalize the learning experience. By leveraging AI models, Prodigy curates customized educational content, evaluates user responses, provides adaptive questioning, and predicts learning outcomes. This ensures learners receive content tailored to their individual learning paths, enhancing their overall educational journey.

**IMPACT:**
Prodigy transforms how learners engage with educational material. By offering targeted assistance, adaptive feedback, and predictive performance metrics, it helps students focus on areas that need improvement and accelerates their learning curve. This personalized approach boosts user engagement, optimizes learning efficiency, and fosters deeper comprehension.

**FEATURES:**

### BACKEND
The backend is built using FastAPI for creating RESTful API endpoints. It handles user requests, processes data, interacts with AI models, and serves responses to the frontend.
    
      backend/
      ├── app/
      │   ├── main.py
      │   ├── content_curation.py
      │   ├── auth.py
      │   ├── config.py
      ├── requirements.txt
      └── .env

### FRONTEND
The frontend is developed using ReactJS to create an interactive and dynamic user interface for learners. It communicates with the backend to display personalized content and feedback.

    frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Chatbot.js
    │   │   ├── Feedback.js
    │   │   ├── PerformanceDashboard.js
    │   │   ├── Login.js
    │   ├── App.js
    │   ├── index.js
    │   └── api.js
    └── package.json

### INSTALLATION AND SETUP
  #### BACKEND :
        1. Navigate to the backend directory:
            cd backend

        2. Create a virtual environment:
            python -m venv venv
            source venv/bin/activate  # For Windows: venv\Scripts\activate

        3. Install dependencies:
            pip install -r requirements.txt

        4. Create a .env file and add the necessary environment variables (e.g., API keys):
            GEMINI_API_KEY=your_gemini_api_key_here

        5. Run the server:
            uvicorn main:app --reload

  #### FRONTEND :
        1. Navigate to the frontend directory:
            cd adaptive-learning-frontend
        
        2. Install frontend dependencies:
            npm install
        
        3. Run the frontend development server:
            npm start

### PROJECT FEATURES:
  #### BACKEND (FASTAPI) :
1. RESTful Endpoints: Handles requests for chat, feedback, and performance prediction.
2. AI-Powered Content Generation: Integrates with AI models for adaptive learning.
3. CORS Middleware: Ensures secure communication between frontend and backend.

#### FRONTEND (React.js) :
1. Login System: Simple user authentication.
2. Chatbot Interface: Allows users to interact with the AI for tailored content.
3. Performance Dashboard: Displays insights into user strengths, weaknesses, and progress.
4. Feedback Component: Provides personalized feedback based on user interactions.

### Running the Application :
  1. Start the backend server by running
     
         uvicorn main:app --reload   // in the backend directory.

  2. Start the frontend server by running
     
          npm start   // in the frontend directory.

  3. Access the application at

          http://localhost:3000.

