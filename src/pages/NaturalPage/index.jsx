
import { Orchids } from '../../data/ListOfOrchids'
import { Container, Row, Col } from 'react-bootstrap';
import OrchidCard from '../../components/OrchidCard';

export default function NaturalPage() {
  // lọc các loài hoa lan tự nhiên
  const naturalOrchids = Orchids.filter(orchid => orchid.isNatural);

  return (
    <div className="bg-light text-dark min-vh-100">
      <Container className="py-4">
        <Row>
          {naturalOrchids.map((orchid) => (
            <Col key={orchid.id} className="mb-4">
              <OrchidCard orchid={orchid}/>
            </Col>
          ))}
        </Row>
        {naturalOrchids.length === 0 && (
          <div className="text-center">
            <h3>No natural orchids found</h3>
            <p>There are no natural orchids available at the moment.</p>
          </div>
        )}
      </Container>
    </div>
  );
}