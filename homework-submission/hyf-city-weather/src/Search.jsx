import React from 'react';

const Search = () => {
  return (
    <form>
      <label htmlFor="search">Search the weather of any city</label>
      <input name="search" type="search" />
      <input type="submit" value="search" />
    </form>
  )
}

export default Search;