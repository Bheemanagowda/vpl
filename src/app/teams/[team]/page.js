"use client";

import React, { use } from "react";
import Teams from "@/data/teams.json";
import Heading from "@/components/Heading";

export default function Page({ params }) {

  const { team } = use(params);   // ✅ unwrap params correctly

  const teamData = Teams[team];

  if (!teamData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-center text-2xl">
          Team Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <Heading
          title={teamData.teamName}
          className="text-center"
          className1="mx-auto"
        />

        {/* ✅ TEAM OWNER SECTION */}
      {/* TEAM OWNER SECTION */}
{teamData.teamOwner.map((owner, index) => (
  <div
    key={index}
    className="grid md:grid-cols-2 gap-10 items-center bg-[#530e0e] rounded-xl p-8 mb-12"
  >
    {/* Owner Content LEFT */}
    <div>
      <h2 className="text-3xl font-bold mb-2 text-white">
        {owner.teamTitle}
      </h2>

      <p className="text-yellow-400 font-semibold mb-3">
        {owner.tagLine}
      </p>

      <h3 className="text-xl font-semibold mb-3 text-gray-200">
        Owner : {owner.ownerName}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {owner.desc}
      </p>
    </div>

    {/* Owner Image RIGHT */}
    <div className="flex justify-center">
      <img
        src={owner.owenerImage}
        alt={owner.ownerName}
        className="w-full h-130 object-cover rounded-xl"
      />
    </div>
  </div>
))}

        {/* PLAYERS SECTION (YOUR SAME CODE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamData.players.map((player, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <img
                src={player.playerImage}
                alt={player.name}
                className="w-full h-120 mx-auto rounded-full mb-4 object-cover"
              />

              <h3 className="text-black font-semibold">
                {player.name}
              </h3>

              <p className="text-gray-900">
                {player.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}