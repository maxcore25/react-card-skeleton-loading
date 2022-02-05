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
      <Card
        mainImg={'http://source.unsplash.com/random/1'}
        title={'Lorem ipsum dolor sit amet'}
        subtitle={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
        profilePic={'http://source.unsplash.com/random/2'}
        author={'John Doe'}
        date={'February 25, 2022'}
      />
    </div>
  );
}
