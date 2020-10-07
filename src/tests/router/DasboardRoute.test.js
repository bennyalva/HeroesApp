import React, { useContext } from 'react'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

const { mount } = require("enzyme");
const { DashboardRoutes } = require("../../routers/DashboardRoutes");

describe('Test DasboardRouter', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
   test('should show correctly', () => {
      const wrapper = mount(
        <MemoryRouter>
           <AuthContext.Provider value={contextValue}>
             <DashboardRoutes />
           </AuthContext.Provider>
        </MemoryRouter>
      );
      expect(wrapper).toMatchSnapshot();
   });
    
});
