import React from 'react'
import { HeroesScreen } from '../../../components/heroes/HeroesScreen';
import { MemoryRouter, Route } from 'react-router-dom';

const { mount } = require("enzyme");
describe('Test on HeroScreen', () => {
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()

    }

   test('should show redirect if missing params', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroesScreen history={ history } />
        </MemoryRouter>
    );
       expect(wrapper.find('Redirect').exists()).toBe(true);
   })
   test('should show a heroe if exist params', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
            <Route path="/hero/:heroeId" component={ HeroesScreen} />
        </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);
   });
   test('should call push', () => {
    const history = {
        length: 1,
        push: jest.fn(),
        goBack: jest.fn()

    };
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
            <Route
                 path="/hero/:heroeId" component={ () => <HeroesScreen history={ history} />} />
        </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenCalledWith('/');
    expect(history.goBack).not.toHaveBeenCalled();
   });
   test('should call goback ', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
            <Route
                 path="/hero/:heroeId" component={ () => <HeroesScreen history={ history} />} />
        </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(history.goBack).toHaveBeenCalled();
    expect(history.push).not.toHaveBeenCalled();
   });
   test('should call redirect if heroe no exists ', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero/dc-batmanfasdf']}>
            <Route
                 path="/hero/:heroeId" component={ () => <HeroesScreen history={ history} />} />
        </MemoryRouter>
    );
    expect(wrapper.text()).toBe('')
    
   })
   
   
});
