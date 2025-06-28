import React from "react";
import SegmentNavigator from "../components/SegmentNavigator";
import scene from "../data/sample_scene.json";
import fallbackScene from "../data/sample_scene.json";


// Define the type structure (same as in SegmentNavigator)
type Segment = {
  type: "dialogue" | "narration";
  speaker?: string;
  expression_action?: string;
  line?: string;
  text?: string;
};

export default function TestScenePage() {
  const saved = localStorage.getItem("latestResult");
  const scene = saved ? JSON.parse(saved) : fallbackScene;
  const segments = scene.segments as Segment[]; // 👈 cast to expected type

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-2">{scene.title}</h1>
      <p className="text-center italic text-gray-400 mb-6">
        {scene.setting_narration}
      </p>
      <SegmentNavigator segments={segments} />
    </div>
  );
}
