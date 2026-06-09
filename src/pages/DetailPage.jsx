import { useParams } from 'react-router-dom';
import ReserveForm from '../components/ReserveForm';

function DetailPage() {
  const { id } = useParams();
  const property = {
    title: `Property ${id}`,
    description: 'Property details are loading or not available.',
    pricePerNight: 0,
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '40px auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
      <div>
        <h1>{property.title}</h1>
        <p>{property.description}</p>
      </div>
      
      <aside>
        <ReserveForm pricePerNight={property.pricePerNight} />
      </aside>
    </div>
  );
}

export default DetailPage;
