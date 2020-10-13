import React from 'react';
import { mount } from 'enzyme';
import { SearchScreen } from '../../../components/search/SearchScreen';
import { MemoryRouter, Route } from 'react-router-dom';
describe('Test on Search screen', () => {
  
   test('should show correctly with default values', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <Route path="/search" component={ SearchScreen } />
        </MemoryRouter>
    );
      expect(wrapper).toMatchSnapshot(); 
      expect(wrapper.find('.alert-info').text().trim()).toBe('Search a heroe');
   });
   test('should show batman and input with value of querystring', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <Route path="/search" component={ SearchScreen } />
        </MemoryRouter>
    );
        expect(wrapper.find('input').prop('value')).toBe('batman');
        expect(wrapper).toMatchSnapshot();
   });

   test('should show error with not foud heroe', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman123']}>
            <Route path="/search" component={ SearchScreen } />
        </MemoryRouter>
    );
    expect(wrapper.find('.alert-danger').text().trim()).toBe('There is no a heroe with batman123');
   
  });

  test('should call push on history', () => {
      const historyMock = {
          push: jest.fn()
      }
      const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman123']}>
            <Route path="/search" component={ () => <SearchScreen history={ historyMock} /> } />
        </MemoryRouter>
       );
       wrapper.find('input').simulate('change', {
           target: {
               name: 'heroeDesc',
               value: 'batman'
           }
       });
       wrapper.find('form').prop('onSubmit')({
           preventDefault(){}
       });
       expect(historyMock.push).toHaveBeenCalledWith('?q=batman')
  });
   
   
    
});
