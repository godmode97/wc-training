
import Form from './components/';
import { connect } from 'react-redux';
import { toDoAdded } from './actions';
export const FormContainer = connect((state) => ({ state }), { toDoAdded })(Form);