// Utility functions for luggage management

export const calculateTotalWeight = (items) => {
  return items.reduce((total, item) => total + item.weight, 0);
};