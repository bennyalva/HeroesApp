import React from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';
const { mount } = require("enzyme");


describe('Tests on AppRouter', () => {
  const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
   test('should show login if is not authenticated', () => {
      const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <AppRouter />
        </AuthContext.Provider>
      );
      expect(wrapper).toMatchSnapshot();
   });

   test('should show marvel component if is authenticated', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'rey'
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <AppRouter />
        </AuthContext.Provider>
      );
      expect(wrapper.find('.navbar').exists()).toBe(true);
   })
   
    
});
