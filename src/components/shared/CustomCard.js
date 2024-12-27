import { Badge, Tooltip, OverlayTrigger } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { capitalize } from '../../utils/string';

function CustomCard(props) {
  const { title, description, content, timestamp } = props;

  const formattedDate = moment(timestamp).format('DD/MM/YYYY');
  const hoverFormattedDate = moment(timestamp).format('hh:mm A');

  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between py-2">
          {capitalize(title)}
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="badge-tooltip">
              {hoverFormattedDate}
            </Tooltip>}
          >
            <Badge bg="primary" pill style={{ cursor: 'pointer' }}>
              {formattedDate}
            </Badge>
          </OverlayTrigger>
        </Card.Title>
        <Card.Text className="text-center fw-bold pt-2 m-0">{description}</Card.Text>
        <Card.Footer className="text-center pb-2">{content}</Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
