import Loader from 'components/Loader/Loader';
import React, { useState } from 'react';
import { SearchBarProps } from 'type/SearchBar';
import style from './SearchBar.module.scss';

export default function SearchBar({ isLoading, onSubmit }: SearchBarProps) {
  const [searchName, setSearchName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchName.trim()) return alert('Can not be empty');
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className={style.search__bar}>
      <Loader isLoading={isLoading} />
      <form className={style.search__form} onSubmit={handleSubmit}>
        <button type="submit" className={style.search__button}>
          <span className={style['search__button-label']}>Search</span>
        </button>

        <input
          className={style.search__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchName}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}
