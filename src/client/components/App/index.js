import {Component} from 'react';
import styles from './app.scss';

export default class App extends Component {
  render() {
    return (
      <h1 className={styles.hello}>
        Porpoise
      </h1>
    );
  }
}