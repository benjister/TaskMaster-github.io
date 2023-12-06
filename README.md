#TaskMater

TaskMater is a simple task management application built with Flask.

Features:

- View existing tasks
- Add new tasks
- User authentication (login/logout)

Installation:

1. Clone the repository:
   git clone https://github.com/benjister/TaskMaster
2. Change into the project directory:
   cd TaskMater

3. Create a virtual environment:
   python -m venv venv

4. Activate the virtual environment:
   - On Windows: venv\Scripts\activate
   - On macOS/Linux: source venv/bin/activate

5. Install dependencies:
   pip install -r requirements.txt

6. Set up the Flask app:
   export FLASK_APP=app
   export FLASK_ENV=development
   (On Windows, use set instead of export.)

7. Initialize the database:
   flask init-db

8. Run the app:
   flask run

The app will be accessible at 
http://127.0.0.1:5000/
