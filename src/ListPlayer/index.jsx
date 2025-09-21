import React, { useState } from 'react';
import { Players } from '../data/ListOfPlayers';
import PlayerCard from './PlayerCard';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

export default function ListPlayer() {
  const [selectedPlayer, setSelectedPlayer] = useState(null); // set state selectedPlayer mặc định là null
  const [theme, setTheme] = useState("light"); // set state theme mặc định là light

  // handle click detail 
  const handleDetail = (player) => {
    setSelectedPlayer(player);
  };
  // handle close detail
  const handleClose = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className={theme === "dark" ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>Danh sách cầu thủ nổi bật</h1>
          <Button variant={theme === "dark" ? "light" : "dark"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
        <Row>
          {Players.map((player) => (
            <Col key={player.id}>
              <PlayerCard player={player} onDetail={handleDetail} />
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={!!selectedPlayer} onHide={handleClose} centered> {/* show modal khi selectedPlayer khác null */}
          <Modal.Header closeButton>
            <Modal.Title>{selectedPlayer?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img 
              src={selectedPlayer?.img} 
              alt={selectedPlayer?.name} 
              style={{ width: '100%', marginBottom: '15px' }} 
            />
            <p><strong>Câu lạc bộ:</strong> {selectedPlayer?.club}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}
