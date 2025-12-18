"use client";

import { useEffect } from "react";
import { connectToLiveKit } from "@/lib/livekit";
import { createLocalAudioTrack } from "livekit-client";

export default function Home() {
  useEffect(() => {
    let room: any;

    async function start() {
      try {
        room = await connectToLiveKit("bhaskar");

        const micTrack = await createLocalAudioTrack();
        await room.localParticipant.publishTrack(micTrack);

        console.log("🎤 Mic published to LiveKit");
      } catch (err) {
        console.error("LiveKit connection error:", err);
      }
    }

    start();

    return () => {
      room?.disconnect();
    };
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Vocal_AI</h1>
      <p className="mt-2 text-gray-600">
        Connecting to LiveKit and publishing microphone…
      </p>
    </main>
  );
}
