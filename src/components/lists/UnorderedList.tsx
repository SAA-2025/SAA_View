import React from 'react';

interface UnorderedListProps {
  items: string[];
}

const UnorderedList: React.FC<UnorderedListProps> = ({ items }) => {
  return (
    <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }}>
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            fontSize: '1rem',
            marginBottom: '0.5rem',
            listStyleType: 'disc',
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>{item}</span>
        </li>
      ))}
      <style>
        {`
          ul {
            list-style-position: outside;
          }
          li::marker {
            font-size: 2rem;
            color: red
          }
        `}
      </style>
    </ul>
  );
};

export default UnorderedList;
