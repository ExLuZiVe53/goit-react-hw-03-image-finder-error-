import { Formik, ErrorMessage } from 'formik';
import React, { Component } from 'react';
import {
  SearchForm,
  Header,
  BTNSubmit,
  ButtonLabel,
  InputSearch,
} from '../SearchBar/Searchbar.styled.js';

import { FcSearch } from 'react-icons/fc';


export class SearchBar extends Component {
  //стан
  state = {
    searchImg: '',
  };

  // Слухач інпутів
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value.trim() });
  };
  // Submit form
  submit = e => {
    e.preventDefault();
    this.props.handleSabmit(this.state.searchImg);
   
      
  };

  initialValues = { searchimg: '' };
  render() {
    return (
      <Header className="searchbar">
        <Formik initialValues={this.initialValues}>
          <SearchForm onSubmit={this.submit} className="form">
            <BTNSubmit type="submit" className="button">
              <FcSearch value={{ size: '1.5em' }} />
              <ButtonLabel className="button-label">Search</ButtonLabel>
            </BTNSubmit>

            <InputSearch
              className="input"
              name="searchImg"
              type="text"
              autoComplete="off"
              autoFocus
              onChange={this.handleChange}
              placeholder="Search images and photos"
            />
            <ErrorMessage name="searchImg" component="div" />
          </SearchForm>
        </Formik>
      </Header>
    );
  }
}
