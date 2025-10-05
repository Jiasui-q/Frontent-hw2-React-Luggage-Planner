// ItemInfo component displays item information, also takes in the delete function from the parent component
// to help delete an item when user clicks the delete button
export default function ItemInfo({ item, onDelete }) {
  return (
    <div className="item-info">
      <div className="item-info-content">
        <h3 className="item-info-name">{item.name}</h3>
        <p className="item-info-weight">{item.weight} lbs</p>
      </div>
      <button
        className="item-info-delete"
        onClick={() => onDelete(item.id)}
      >
        x
      </button>
    </div>
  );
}
