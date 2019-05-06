import * as React from 'react';

// style
import * as styles from './styles.scss';
import { Spinner } from '../../components';

export interface IProps {
  showLoadScreen(text: string): void;
  hideLoadScreen(): void;
  show: boolean;
  text: string;
}

export interface IState {
  dot: string;
}

export class Navbar extends React.Component<IProps, IState> {
  private interval: NodeJS.Timeout | null = null;
  constructor(props: IProps) {
    super(props);
    this.state = {
      dot: '.'
    }
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.show) {
      this.interval = setInterval(() => {
        if (this.state.dot.length > 2) {
          this.setState({ dot: '.' })
        } else {
          this.setState({ dot: this.state.dot + '.' })
        }
      }, 500);
    } else {
      this.interval ? clearInterval(this.interval) : null;
    }
  }

  render(): JSX.Element {
    return (
      <div className={styles.container}>
        <Spinner className={styles.spinner} type='grow' size='lg' />
        {this.props.text !== '' ? (<span className={styles.container_text}>
          {this.props.text !== '' ? this.props.text : null}
          <span className={styles.dot}>{this.state.dot}</span>
        </span>) : null}
      </div>
    );
  }
}
