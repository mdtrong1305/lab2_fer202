
import { Orchids } from '../../data/ListOfOrchids';
import { Container, Row, Col } from 'react-bootstrap';
import OrchidCard from '../../components/OrchidCard';

export default function HomePage() {
  return (
    <div className="bg-light text-dark min-vh-100">
      <Container className="py-4">
        <Row>
          {Orchids.map((orchid) => (
            <Col key={orchid.id} className="mb-4">
              <OrchidCard orchid={orchid}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
