const WEIGHT_LIMITS = {
  personalItem: 15,
  carryOn: 22
};

import { useState } from "react";
import BagSection from "./BagSection";

export default function Planner({ personalItemItems, carryOnItems, onAddItem, onDeleteItem }) {
  const [itemName, setItemName] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [selectedBagType, setSelectedBagType] = useState("personalItem");

  // function to check if the item is valid, it's valid when name and weight are not empty
  const isItemValid = () => {
    return itemName.trim() !== "" && parseFloat(itemWeight) > 0;
  };

  // function to add item to bag if it's valid
  const addItem = () => {
    if (!isItemValid()) return;

    // Call the parent's addItem function
    onAddItem(itemName, itemWeight, selectedBagType);

    // Clear form
    setItemName("");
    setItemWeight("");
  };

  return (
    <div className="planner">
      <h1>Planner</h1>

      <div className="add-item-form">
        <h2>Add Item</h2>
        <div className="form-row">
          <label for="item-name">Item:</label>
          <input
            id="item-name"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
          />
        </div>

        <div className="form-row">
          <label for="item-weight">Weight (lbs):</label>
          <input
            id="item-weight"
            type="number"
            step="0.1"
            min="0"
            value={itemWeight}
            onChange={(e) => setItemWeight(e.target.value)}
            placeholder="Enter weight"
          />
        </div>

        <div className="form-row">
          <label for="bag-select">Add to:</label>
          <select
            id="bag-select"
            value={selectedBagType}
            onChange={(e) => setSelectedBagType(e.target.value)}
          >
            <option value="personalItem">Personal Item (15 lb limit)</option>
            <option value="carryOn">Carry-on (22 lb limit)</option>
          </select>
        </div>

        <button
          onClick={addItem}
          disabled={!isItemValid()}
          className="add-button"
        >
          Add Item
        </button>
      </div>

      <BagSection
        title="Personal Item"
        icon="🎒"
        items={personalItemItems}
        weightLimit={WEIGHT_LIMITS.personalItem}
        onDeleteItem={onDeleteItem}
        bagType="personalItem"
      />

      <BagSection
        title="Carry-on"
        icon="💼"
        items={carryOnItems}
        weightLimit={WEIGHT_LIMITS.carryOn}
        onDeleteItem={onDeleteItem}
        bagType="carryOn"
      />
    </div>
  );
}
