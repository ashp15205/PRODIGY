## PRODIGY - AN ADAPTIVE LEARNING PLATFORM

## Table of Contents
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Impact](#impact)
- [Directories](#directories)
- [Installation and Setup](#installation-and-setup)
- [Project Features](#project-features)
- [Running the Application](#running-the-application)


## **PROBLEM STATEMENT:**
Current e-learning systems often deliver the same content to all users, regardless of their unique learning needs and capabilities. This one-size-fits-all approach can hinder effective learning and fails to address individual strengths, weaknesses, and progress levels.

## **SOLUTION:**
Prodigy is an AI-powered web application designed to personalize the learning experience. By leveraging advanced machine learning algorithms and AI models, Prodigy curates customized educational content tailored to each learner's individual needs. The platform assesses user inputs, tracks progress, and adapts its content dynamically to ensure continuous and targeted learning.

Prodigy incorporates the following key elements:

1. Adaptive Content Generation: Prodigy generates questions and learning material based on the user’s proficiency, ensuring that each learner receives challenges appropriate to their skill level.
2. Personalized Feedback System: Learners receive real-time, specific feedback to help them understand their mistakes and improve continuously.
3. Predictive Performance Analysis: The platform utilizes predictive analytics to estimate future performance, guiding learners on areas that need more focus.
4. Interactive Chatbot Support: A chatbot interface is integrated to assist users in navigating the platform, answering questions, and providing resources tailored to their queries.
5. Seamless User Experience: With an easy-to-use interface powered by ReactJS and real-time communication with the backend, Prodigy ensures a smooth and engaging learning journey.

This comprehensive approach allows Prodigy to offer a more effective and tailored learning experience, enhancing both engagement and outcomes.

#### User Interface: 


![prodigy](https://github.com/user-attachments/assets/3c458b19-755e-4b9f-8fb0-a5fe186b92c7)




## **IMPACT:**
Prodigy transforms how learners engage with educational material. By offering targeted assistance, adaptive feedback, and predictive performance metrics, it helps students focus on areas that need improvement and accelerates their learning curve. This personalized approach boosts user engagement, optimizes learning efficiency, and fosters deeper comprehension.

### DIRECTORIES:

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

### Running the Application:
  1. Start the backend server by running
     
         uvicorn main:app --reload   // in the backend directory.

  2. Start the frontend server by running
     
          npm start   // in the frontend directory.

  3. Access the application at

          http://localhost:3000.


