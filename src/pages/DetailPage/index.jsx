
import { useParams, NavLink } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Orchids } from '../../data/ListOfOrchids';

export default function DetailPage() {
  const { id } = useParams();
  const orchid = Orchids.find(o => o.id === id);

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Img 
              variant="top" 
              src={`/${orchid.image}`} 
              alt={orchid.name}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title className="h2 mb-3">{orchid.name}</Card.Title>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <strong>Color:</strong> {orchid.color}
                  </div>
                  <div className="mb-3">
                    <strong>Origin:</strong> {orchid.origin}
                  </div>
                  <div className="mb-3">
                    <strong>Category:</strong> {orchid.category}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <strong>Special:</strong> 
                    <span className={`ms-2 badge ${orchid.isSpecial ? 'bg-success' : 'bg-secondary'}`}>
                      {orchid.isSpecial ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="mb-3">
                    <strong>Natural:</strong> 
                    <span className={`ms-2 badge ${orchid.isNatural ? 'bg-primary' : 'bg-secondary'}`}>
                      {orchid.isNatural ? 'Yes' : 'No'}
                    </span>
                  </div>
                </Col>
              </Row>
              <div className="mt-4">
                <NavLink to="/" className="btn btn-primary me-2">
                  Back to Home
                </NavLink>
                <NavLink to="/naturals" className="btn btn-success">
                  View Natural Orchids
                </NavLink>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}