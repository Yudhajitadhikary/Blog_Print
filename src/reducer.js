const initialState = {
    email: '',
    password:'',
    address:'',
    pincode:'',
    phoneno:''
  };
  
  function addReducer(state = initialState, action) {
      
    switch(action.type) {
      case 'SUBMIT':
        return {
            email:action.payload.email,
            password:action.payload.password,
            address:action.payload.address,
            pincode:action.payload.pincode,
            phoneno:action.payload.phoneno

        }
      default:
        return state;
    }
  }
  
  export default addReducer;