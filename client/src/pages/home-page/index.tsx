import React from 'react';
import ApiService from 'services/api-service';
import * as Styled from './styled';
import ArtistCard from './artist-card';

const HomePage = () => {
  const [houses, setHouses] = React.useState<HouseModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedHouses = await ApiService.fetchart();
      setHouses(fetchedHouses);
    })();
  }, []);

  return (
    <Styled.HousesGrid>
      {houses.map((houseProps) => (<ArtistCard key={houseProps.id} {...houseProps} />))}
    </Styled.HousesGrid>
  );
};

export default HomePage;
