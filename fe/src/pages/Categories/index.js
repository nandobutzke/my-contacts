import { useState } from 'react';
import InputSearch from '../../components/InputSearch';

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChangeSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <InputSearch
      searchTerm={searchTerm}
      handleChangeSearch={handleChangeSearch}
    />
  );
}
