import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className="py-5" style={{ maxWidth: '600px' }}>
      <Card>
        <Card.Header className="bg-primary text-white">
          <h2 className="mb-0">Liên hệ</h2>
        </Card.Header>
        <Card.Body>
          <div className="mb-3">
            <strong>📍 Địa chỉ:</strong><br />
            123 Đường Hoa Lan, Quận Vườn Hoa<br />
            TP. Loài Hoa, Thế Giới Hoa
          </div>
          <div className="mb-3">
            <strong>📞 Điện thoại:</strong><br />
            +84 123 456 789
          </div>
          <div className="mb-3">
            <strong>✉️ Email:</strong><br />
            hoa@thegioiloaihoa.com
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
