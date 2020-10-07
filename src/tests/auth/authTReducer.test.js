// const state = {
//     name: 'benny', 
//     logged: true

const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/types");

// }
describe('Tests on authReducer', () => {
   test('should return default state', () => {
      expect(authReducer({ logged: false }, {})).toEqual({ logged: false })
   });
   test('should save user name', () => {
      expect(authReducer({ logged: false}, {
        type: types.login,
        payload: {
            name: 'beny'
        }
    })).toEqual({logged: true, name: 'beny'})
   });
   test('should call logout', () => {
    expect(authReducer({ logged: true}, {
      type: types.logout
  })).toEqual({logged: false})
 });
    
});

