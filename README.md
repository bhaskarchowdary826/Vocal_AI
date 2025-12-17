# VOCAL_AI
Real-time AI Voice Assistant

## FINAL PROJECT STRUCTURE

Vocal_AI/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   └── token.py             # LiveKit token API
│   │   ├── ai/
│   │   │   ├── __init__.py
│   │   │   ├── stt.py               # OpenAI Speech-to-Text
│   │   │   ├── llm.py               # OpenAI Chat / Responses API
│   │   │   ├── tts.py               # OpenAI Text-to-Speech
│   │   │   └── pipeline.py          # STT → LLM → TTS orchestration
│   │   ├── livekit/
│   │   │   ├── __init__.py
│   │   │   ├── worker.py            # AI voice worker (core)
│   │   │   ├── room_manager.py      # Join / leave / lifecycle
│   │   │   └── tracks.py            # Audio track handling
│   │   ├── models/
│   │   │   └── schemas.py           # Pydantic schemas
│   │   ├── utils/
│   │   │   ├── logger.py
│   │   │   └── audio.py             # PCM helpers, conversions
│   │   ├── main.py                 # FastAPI entry point
│   │   ├── config.py               # Env + settings (Pydantic)
│   │   ├── dependencies.py         # Common deps (auth, clients)
│   │   └── __init__.py
│   ├── Dockerfile
│   ├── requirements.txt
│   └── .env.example
├── frontend/
│   ├── app/                         # Next.js App Router
│   │   ├── page.tsx                 # Home (voice UI)
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── VoiceControls.tsx        # Mic / mute / status
│   │   ├── TranscriptPanel.tsx      # Conversation log
│   │   └── ConnectionStatus.tsx
│   ├── hooks/
│   │   ├── useLiveKit.ts            # LiveKit client logic
│   │   └── useVoice.ts              # Voice state
│   ├── lib/
│   │   ├── livekit.ts               # LiveKit config
│   │   └── api.ts                   # Backend calls
│   ├── next.config.js
│   ├── package.json
│   └── tsconfig.json
├── infra/
│   ├── docker-compose.yml           # Full local stack
│   └── nginx.conf                   # Optional reverse proxy
├── docs/
│   ├── architecture.md              # System design explanation
│   └── diagrams/                    # PNG / SVG diagrams
├── .gitignore
├── README.md
└── LICENSE

