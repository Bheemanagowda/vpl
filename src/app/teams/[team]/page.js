"use client";

import { use } from "react";
import Teams from "@/data/teams.json";

export default function Page({ params }) {

  const { team } = use(params);   // unwrap params

  const teamData = Teams[team];

  if (!teamData) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Team Not Found






      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        {teamData.teamName}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {teamData.players.map((player, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <img
              src={player.playerImage}
              alt={player.name}
              className="w-100 h-100 mx-auto rounded-full mb-4 object-cover"
            />

            <h3 className="text-black font-semibold">{player.name}</h3>

            <p className="text-gray-900">{player.role}</p>
          </div>
        ))}

      </div>

    </div>
  );
}