const LUGGAGE_TYPES = [
  {
    id: 1,
    icon: "🎒",
    name: "Personal item",
    maxWeightLbs: 15,
    description: "A small bag that fits under the seat in front of you.",
    allowedInBasicEconomy: true,
  },
  {
    id: 2,
    icon: "💼",
    name: "Carry-on",
    maxWeightLbs: 22,
    description: "A larger bag that fits in the overhead bin.",
    allowedInBasicEconomy: true,
  },
  {
    id: 3,
    icon: "🧳",
    name: "Checked bag",
    maxWeightLbs: 50,
    description: "A bag that is checked at the gate and stored in the cargo hold.",
    allowedInBasicEconomy: false,
  },
];

import LuggageTypeInfo from "./LuggageTypeInfo";
import { useState } from "react";

export default function LuggageOverview() {
  const [basicEconomy, setbasicEconomy] = useState(true);

  return (
    <div className="luggage-overview">
      <h1>Luggage Types</h1>
      <input id="basic-ecnomy-checkbox" type="checkbox" checked={basicEconomy} onChange={() => setbasicEconomy(!basicEconomy)} />
      <label for="basic-ecnomy-checkbox"> Only Show Allowed Items For Basic Economy </label>
      <div className="luggage-grid">
        {LUGGAGE_TYPES
          .filter((t) => basicEconomy ? t.allowedInBasicEconomy : true)
          .map((t) => (
            <LuggageTypeInfo
              key={t.id}
              icon={t.icon}
              name={t.name}
              maxWeightLbs={t.maxWeightLbs}
              description={t.description}
            />
          ))}
      </div>
    </div>
  );
}
