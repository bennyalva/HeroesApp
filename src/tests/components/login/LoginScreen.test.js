import React from 'react';
import { AuthContext } from '../../../auth/AuthContext';
const { mount } = require("enzyme");
const { LoginScreen } = require("../../../components/login/LoginScreen");

describe('Tests on LoginScreen', () => {
    const historyMock = {
        replace: jest.fn()
    }
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Pedro'
        }
    }
    const wrapper = mount(<AuthContext.Provider value={contextValue}>
        <LoginScreen  history={ historyMock }/>
    </AuthContext.Provider>)
   test('should show correctly', () => {
       expect(wrapper).toMatchSnapshot();
   });
   test('should to do login and then do dispatch and navigation', () => {
       const handlerClick = wrapper.find('button').prop('onClick');
       handlerClick();
       expect(contextValue.dispatch).toHaveBeenCalled();
       expect(historyMock.replace).toHaveBeenCalledWith('/');
       localStorage.setItem('lastPath', '/dc');
       handlerClick();
       expect(historyMock.replace).toHaveBeenCalledWith('/dc')
       
   });
   
    
});
