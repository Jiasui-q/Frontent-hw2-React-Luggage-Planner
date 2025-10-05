import ItemInfo from "./ItemInfo";
import { calculateTotalWeight } from "../../utils/luggageUtils";


export default function BagSection({
  title,
  icon,
  items,
  weightLimit,
  onDeleteItem,
  bagType
}) {
  const totalWeight = calculateTotalWeight(items);
  const isOverLimit = totalWeight > weightLimit;

  return (
    <div className="bag-section">
      <div className="bag-header">
        <h2>{title} {icon}</h2>
        <div className="weight-info">
          <span className={`weight-total ${isOverLimit ? 'over-limit' : ''}`}>
            {totalWeight.toFixed(1)} / {weightLimit} lbs
          </span>
          {isOverLimit && (
            <span className="weight-warning">⚠️ Over limit!</span>
          )}
        </div>
      </div>

      <div className="items-list">
        {items.length === 0 ? (
          <p className="empty-message">No items added yet</p>
        ) : (
          items.map(item => (
            <ItemInfo
              key={item.id}
              item={item}
              onDelete={(id) => onDeleteItem(id, bagType)}
            />
          ))
        )}
      </div>
    </div>
  );
}
