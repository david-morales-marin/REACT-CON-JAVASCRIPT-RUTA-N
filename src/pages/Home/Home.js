import * as React from 'react';

const Home = () => {
  const [charactersList, setCharactersList] = React.useState([]);

  React.useEffect(() => {
    const list = fetch(
      'https://rickandmortyapi.com/api/character/?page=1'
        .then((response) => response.json)
        .then((data) => console.log(data.results))
        .catch(console.error)
    );
  }, []);

  return (
    <main>
      <ul>
        {
          charactersList.map((character)=>{
            charactersList
          })
        }
        <li></li>
      </ul>
      <Card character={charactersList} />
    </main>
  );
};

export default Home;
