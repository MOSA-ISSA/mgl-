import React from 'react';
// import './ColumnedList.css'; // Make sure to import your CSS file

const items = [
  { id: 1, text: 'Item 1' },
  { id: 2, text: 'Item 2' },
  { id: 3, text: 'Item 3' },
  // Add more items as needed
];

const ColumnedListGrid = () => {
  return (
    <div className="column-list-grid">
      {items.map(item => (
        <div key={item.id} className="column-list-item-grid">
          {item.text}
        </div>
      ))}
    </div>
  );
}

export default ColumnedListGrid;
