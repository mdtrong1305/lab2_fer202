import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function OrchidCard({ orchid }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img
        variant="top"
        src={orchid.image}
        alt={orchid.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{orchid.name}</Card.Title>
        <NavLink to={`/detail/${orchid.id}`} className="btn btn-primary">
          Detail
        </NavLink>
      </Card.Body>
    </Card>
  );
}
