export default function LuggageTypeInfo({ icon, name, maxWeightLbs, description }) {
  return (
    <div className="luggage-type">
      <div className="luggage-type-icon">{icon}</div>
      <div className="luggage-type-body">
        <h2 className="luggage-type-title">{name}</h2>
        <p className="luggage-type-subtitle">Max weight: {maxWeightLbs} lbs</p>
        <p className="luggage-type-description">{description}</p>
      </div>
    </div>
  );
}


