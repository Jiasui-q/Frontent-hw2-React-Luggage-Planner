import { useState } from "react";
import { Sidebar } from "./Sidebar";
import LuggageOverview from "./pages/luggage-overview/LuggageOverview";
import Planner from "./pages/planner/Planner";
import Summary from "./pages/summary/Summary";

function App() {
  const [page, setPage] = useState("luggage-overview");
  const [personalItemItems, setPersonalItemItems] = useState([]);
  const [carryOnItems, setCarryOnItems] = useState([]);
  const [nextId, setNextId] = useState(0);
  const generateId = () => {
    const currentId = nextId;
    setNextId(prev => prev + 1);
    return currentId;
  };

  // add an item to the selected bag
  const addItem = (itemName, itemWeight, selectedBagType) => {
    const newItem = {
      id: generateId(),
      name: itemName.trim(),
      weight: parseFloat(itemWeight)
    };

    if (selectedBagType === "personalItem") {
      setPersonalItemItems([...personalItemItems, newItem]);
    } else {
      setCarryOnItems([...carryOnItems, newItem]);
    }
  };

  // delete an item from the selected bag
  const deleteItem = (itemId, bagType) => {
    if (bagType === "personalItem") {
      setPersonalItemItems(personalItemItems.filter(item => item.id !== itemId));
    } else {
      setCarryOnItems(carryOnItems.filter(item => item.id !== itemId));
    }
  };

  return (
    <div className="app">
      <Sidebar setPage={setPage} currentPage={page} />
      <div className="main">
        {page === "luggage-overview" && <LuggageOverview />}
        {page === "planner" && (
          <Planner
            personalItemItems={personalItemItems}
            carryOnItems={carryOnItems}
            onAddItem={addItem}
            onDeleteItem={deleteItem}
          />
        )}
        {page === "summary" && (
          <Summary
            personalItemItems={personalItemItems}
            carryOnItems={carryOnItems}
          />
        )}
      </div>
    </div>
  );
}

export default App;
