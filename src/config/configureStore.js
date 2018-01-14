import { createStore } from 'redux';
import app from '../reducers';

export default function configureStore() {
  return createStore(app);
}
