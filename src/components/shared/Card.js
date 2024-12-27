import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

function CustomCard(props) {
  const { title, description, content, timestamp } = props;

  const formattedDate = moment(timestamp).format('DD/MM/YYYY'); 

  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between py-2'>
          {title}
          <Badge bg="primary" pill>{formattedDate}</Badge>
        </Card.Title>
        <Card.Text className='text-center pt-2 m-0'>
          {description}
        </Card.Text>
        <Card.Footer className='text-center pb-2'>
          {content}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;