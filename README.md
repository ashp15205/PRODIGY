## PRODIGY - AN ADAPTIVE LEARNING PLATFORM

## Table of Contents
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Key Features](#key-features)
- [Impact](#impact)
- [Directories](#directories)
- [Installation and Setup](#installation-and-setup)
- [Project Details](#project-details)
- [Running the Application](#running-the-application)


## **PROBLEM STATEMENT:**
There has been an increasing demand for tailored education and training in all domains. Traditional methods often lack personalization and do not adapt based on individual learning capabilities and needs. Leveraging AI to create an interactive, adaptive learning experience can accelerate the learning curve and provide more targeted assistance to learners.

## **SOLUTION:**
Prodigy is an AI-powered web application designed to personalize the learning experience. By leveraging advanced machine learning algorithms and AI models, Prodigy curates customized educational content tailored to each learner's individual needs. The platform assesses user inputs, tracks progress, and adapts its content dynamically to ensure continuous and targeted learning.

### KEY FEATURES:

Prodigy incorporates the following key elements:

1. AI-Powered Content Curation: Selects and presents personalized learning materials based on the learner's progress and preferences.
2. Adaptive Questioning & Evaluation: Adjusts question difficulty and focus in real-time to match the learner's performance level.
3. Personalized Feedback: Offers insights into strengths and weaknesses, along with tailored recommendations for improvement.
4. Performance Prediction: Uses data from interactions and assessments to forecast future learner performance and progress.
5. Interactive Chatbot Interface: Provides a conversational interface for real-time learner guidance and support throughout the learning process.
6. Progress Tracking: Displays a visual representation of the learner's journey, highlighting completed modules and areas requiring improvement.

This comprehensive approach allows Prodigy to offer a more effective and tailored learning experience, enhancing both engagement and outcomes.

#### User Interface: 



![prodigy](https://github.com/user-attachments/assets/3c458b19-755e-4b9f-8fb0-a5fe186b92c7)




## **IMPACT:**
Prodigy transforms how learners engage with educational material. By offering targeted assistance, adaptive feedback, and predictive performance metrics, it helps students focus on areas that need improvement and accelerates their learning curve. 

1. Enhanced Learning Experience: Personalizes content and practice to cater to individual learning needs, making education more effective
2. Increased Engagement: Interactive modules and gamified progress tracking keep users motivated and focused.
3. Accessible Education: Provides quality learning opportunities accessible from any device, anywhere.
4. Data-Driven Insights: Tracks user performance to help identify strengths and areas needing improvement. 
5. Skill Development: Prepares users for academic, technical, or professional growth through targeted modules. 


## DIRECTORIES:


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
  #### FRONTEND :
        1. Navigate to the frontend directory:
            cd adaptive-learning-frontend
        
        2. Install frontend dependencies:
            npm install
        
        3. Run the frontend development server:
            npm start

### PROJECT DETAILS:
#### FRONTEND (React.js) :
1. Login System: Simple user authentication.
2. Chatbot Interface: Allows users to interact with the AI for tailored content.
3. Performance Dashboard: Displays insights into user strengths, weaknesses, and progress.
4. Feedback Component: Provides personalized feedback based on user interactions.

### Running the Application:
  1. Start the frontend server by running
     
          npm start   // in the frontend directory.

  2. Access the application at

          http://localhost:3000.

