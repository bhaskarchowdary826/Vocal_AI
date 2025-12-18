from fastapi import APIRouter
from livekit import api
from app.config import settings

router = APIRouter()

@router.get("/token")
def generate_token(identity: str = "user"):
    token = api.AccessToken(
        api_key=settings.LIVEKIT_API_KEY,
        api_secret=settings.LIVEKIT_API_SECRET,
    ).with_identity(identity).with_grants(
        api.VideoGrants(
            room_join=True,
            room="vocal-ai-room",
            can_publish=True,
            can_subscribe=True,
        )
    )
    return {"token": token.to_jwt(), "url": settings.LIVEKIT_URL}
