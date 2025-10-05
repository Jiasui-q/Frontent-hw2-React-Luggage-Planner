export default function BagSummary({
  title,
  icon,
  itemsCount,
  weightLimit,
  totalWeight
}) {
  const isOverLimit = totalWeight > weightLimit;

  return (
    <div className="bag-summary">
      <h3>{title} {icon}</h3>
      <div className="bag-details">
        <p><strong>Items:</strong> {itemsCount}</p>
        <p><strong>Weight:</strong> {totalWeight.toFixed(1)} / {weightLimit} lbs</p>
        {isOverLimit && (
          <p className="warning">⚠️ Over weight limit!</p>
        )}
      </div>
    </div>
  );
}
