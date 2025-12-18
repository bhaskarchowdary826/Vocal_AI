from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    LIVEKIT_URL: str
    LIVEKIT_API_KEY: str
    LIVEKIT_API_SECRET: str

    OPENAI_API_KEY: str | None = None

    APP_ENV: str = "development"
    LOG_LEVEL: str = "info"

    class Config:
        env_file = ".env"

settings = Settings()
