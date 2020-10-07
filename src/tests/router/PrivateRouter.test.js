import React from 'react';
import { MemoryRouter } from 'react-router-dom';
const { mount } = require("enzyme");
const { PrivateRoutes } = require("../../routers/PrivateRoutes");

describe('Test PrivateRoute', () => {
    const props = {
        location: {
            pathname: '/marvel'
        }
    };
    Storage.prototype.setItem = jest.fn();
   test('should show component if is autenticated', () => {
      const wrapper = mount(
          <MemoryRouter>
              <PrivateRoutes 
           isAuthenticated={true}
           component={() => <span>Listo!!</span>}
           {...props}
          />
          </MemoryRouter>
      );
      expect(wrapper.find('span').exists()).toBe(true);
      expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
   });
   test('should no show component if is not autenticated', () => {
    const wrapper = mount(
        <MemoryRouter>
            <PrivateRoutes 
         isAuthenticated={false}
         component={() => <span>Listo!!</span>}
         {...props}
        />
        </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
 });
    
});
