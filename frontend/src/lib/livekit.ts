import { Room } from "livekit-client";

export async function connectToLiveKit(identity: string) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!backendUrl) {
    throw new Error("NEXT_PUBLIC_BACKEND_URL not set");
  }

  const res = await fetch(
    `${backendUrl}/api/token?identity=${identity}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch LiveKit token");
  }

  const { token, url } = await res.json();

  const room = new Room({
    adaptiveStream: true,
    dynacast: true,
  });

  await room.connect(url, token);
  return room;
}
