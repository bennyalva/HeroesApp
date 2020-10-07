import React from 'react'
import { Navbar } from '../../../components/ui/NavBar';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';
import '@testing-library/jest-dom';
const { mount } = require("enzyme");
const { AuthContext } = require("../../../auth/AuthContext");

describe('Test on NavBar', () => {
    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()


    }
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Pedro'
        }
    }
   const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
       <MemoryRouter>
            <Router history={historyMock}>
                <Navbar />
            </Router>
       </MemoryRouter>
    </AuthContext.Provider>
   );
   afterEach(() => {
       jest.clearAllMocks();
   })
   test('should show correctly', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('.text-info').text().trim()).toBe('Pedro'); 
   });
   test('should call logout and use history', () => {
       wrapper.find('button').prop('onClick')();
       expect(contextValue.dispatch).toHaveBeenCalledWith({
           type: types.logout
       });
       expect(historyMock.replace).toHaveBeenCalledWith('/login')
   })
   
   
});
