import { calculateTotalWeight } from "../../utils/luggageUtils";
import BagSummary from "./BagSummary";

export default function Summary({ personalItemItems, carryOnItems }) {
  const personalItemTotal = calculateTotalWeight(personalItemItems);
  const carryOnTotal = calculateTotalWeight(carryOnItems);
  const grandTotal = personalItemTotal + carryOnTotal;
  const totalItems = personalItemItems.length + carryOnItems.length;
  const personalItemOverLimit = personalItemTotal > 15;
  const carryOnOverLimit = carryOnTotal > 22;

  return (
    <div className="summary">
      <h1>Luggage Summary</h1>

      <div className="summary-stats">
        <div className="stat-card">
          <h2>Total Weight</h2>
          <div className="stat-value">
            {grandTotal.toFixed(1)} lbs
          </div>
        </div>

        <div className="stat-card">
          <h2>Total Items</h2>
          <div className="stat-value">
            {totalItems} items
          </div>
        </div>
      </div>

      <div className="bag-breakdown">
        <BagSummary
          title="Personal Item"
          icon="🎒"
          itemsCount={personalItemItems.length}
          weightLimit={15}
          totalWeight={personalItemTotal}
        />

        <BagSummary
          title="Carry-on"
          icon="💼"
          itemsCount={carryOnItems.length}
          weightLimit={22}
          totalWeight={carryOnTotal}
        />
      </div>

      {totalItems === 0 && (
        <div className="empty-state">
          <p>No items added yet. Go to the Planner to add some items!</p>
        </div>
      )}

      {grandTotal > 0 && (
        <div className="insights">
          <h3>Insights</h3>
          <div className="insights-details">
            {personalItemOverLimit && (
              <p>❌ Your personal item exceeds the 15 lb limit</p>
            )}
            {carryOnOverLimit && (
              <p>❌ Your carry-on exceeds the 22 lb limit</p>
            )}
            {!personalItemOverLimit && !carryOnOverLimit && (
              <p>✅ All bags are within weight limits!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
