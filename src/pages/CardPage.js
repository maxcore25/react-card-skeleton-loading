import React from 'react';
import Card from '../components/Card/Card';

export default function CardPage() {
  return (
    <div
      style={{
        backgroundColor: '#e8eced',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
      }}>
      <Card mainImg={'http://source.unsplash.com/random'} />
    </div>
  );
}
