export const fetchingRequest = type => ({type});
export const fetchingSuccess = (type, json, next) => ({
  type,
  payload: json,
  next,
});
export const fetchingFailure = (type, error) => ({type, payload: error});
export default {
  fetchingRequest,
  fetchingSuccess,
  fetchingFailure,
};
/** @typeimport {SignUp} from './Auth/SignUp';
import {SignIn} from './Auth/SignIn';
import {SignOut} from './Auth/SignOut';
export {SignUp, SignIn, SignOut};*/
