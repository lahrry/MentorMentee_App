from fastapi import FastAPI, Header, HTTPException, Request

app = FastAPI()

# GET Routes


@app.get("/users")
async def get_all_users(token: str = Header(...)):
    """
    Get all users.
    Requires a web token for authentication.
    """
    pass


@app.get("/users/{user_id}")
async def get_specific_user(user_id: int, token: str = Header(...)):
    """
    Get a specific user by user_id.
    Requires a web token for authentication.
    """
    pass

# POST Routes


@app.post("/login")
async def login_user(request: Request):
    """
    Login for a user (mentor/mentee/admin).
    Authentication and user type verification required.
    """
    pass


@app.post("/meetings")
async def create_meeting(token: str = Header(...)):
    """
    Create a new meeting.
    Requires a web token for authentication.
    """
    pass


@app.post("/pairing")
async def pair_mentor_mentee(token: str = Header(...)):
    """
    Pairing mentor and mentee.
    Requires a web token for authentication.
    """
    pass


@app.post("/upload_media")
async def upload_media(token: str = Header(...)):
    """
    Uploading media.
    Requires a web token for authentication.
    """
    pass

# PUT Routes


@app.put("/users/{user_id}")
async def update_user_info(user_id: int, token: str = Header(...)):
    """
    Change user information (like email & login information).
    Requires a web token for authentication.
    """
    pass


@app.put("/meetings/{meeting_id}")
async def update_meeting_date(meeting_id: int, token: str = Header(...)):
    """
    Update meeting date.
    Requires a web token for authentication.
    """
    pass

# DELETE Routes


@app.delete("/users/{user_id}")
async def delete_user(user_id: int, token: str = Header(...)):
    """
    Delete a user.
    Requires a web token for authentication.
    """
    pass


@app.delete("/meetings/{meeting_id}")
async def delete_meeting(meeting_id: int, token: str = Header(...)):
    """
    Delete a meeting.
    Requires a web token for authentication.
    """
    pass


@app.delete("/media/{media_id}")
async def delete_media(media_id: int, token: str = Header(...)):
    """
    Delete media.
    Requires a web token for authentication.
    """
    pass
