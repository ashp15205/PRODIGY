from typing import Optional

fake_db = {"user1": "password123", "user2": "securepassword"}

def authenticate_user(username: str, password: str) -> Optional[str]:
    if fake_db.get(username) == password:
        return username
    return None
