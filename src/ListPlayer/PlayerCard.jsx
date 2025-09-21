import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function PlayerCard({ player, onDetail }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img 
        variant="top" 
        src={player.img} 
        alt={player.name} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Button variant="primary" onClick={() => onDetail(player)}>
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
}
