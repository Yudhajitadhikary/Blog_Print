import { SUBMIT } from "./actionTypes";

export function submitAction(data) {
    console.log(data)
    return {
      type: SUBMIT,
       payload:data
    };
  }



