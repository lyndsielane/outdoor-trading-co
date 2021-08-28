import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { gql, useQuery } from '@apollo/client';

// Create genre query
const GET_GENRES = gql`
  query GetGenres {
      items {
          genre
      }
  }
`;

function DropdownMenu() {
    const [value, setValue] = useState('');
    const handleSelect = (e) => {
        setValue(e)
    }

    // run query
    const { loading, error, data } = useQuery(GET_GENRES);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    // get unique genres
    const genres = data.items.map(item => item.genre)
        .filter((value, index, self) => self.indexOf(value) === index);

    genres.forEach(g => console.log(g));

    return (
        <div className="App container">
            <DropdownButton
                alignRight
                title="Dropdown right"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
            >

                {/* {create dropdown item per genre} */}
                {genres.map(function(genre, _){
                    return <Dropdown.Item eventKey={genre}>{genre}</Dropdown.Item>;
                  })}

            </DropdownButton>
            <h4>You selected {value}</h4>
        </div>
    );
}


export default DropdownMenu;