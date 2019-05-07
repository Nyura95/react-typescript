import * as React from 'react';

// style
import * as styles from './styles.scss';
import { Spinner, Animated } from '../../components';
import { IProps } from './';

export interface IState {
  dot: string;
}

export class LoadScreen extends React.Component<IProps, IState> {
  private interval: NodeJS.Timeout | null = null;
  static defaultProps = {
    dot: true
  };

  constructor(props: IProps) {
    super(props);
    this.state = { dot: '.' };
    if (props.show === true) this.startInterval();
  }

  startInterval(): void {
    if (this.props.dot) {
      this.interval = setInterval(() => {
        this.state.dot.length > 2 ? this.setState({ dot: '.' }) : this.setState({ dot: this.state.dot + '.' });
      }, 500);
    }
  }

  stopInterval(): void {
    this.interval ? clearInterval(this.interval) : null;
    this.setState({ dot: '.' });
  }

  componentWillReceiveProps(nextProps: IProps): void {
    nextProps.show === true ? this.startInterval() : this.stopInterval();
  }

  render(): JSX.Element {
    if (this.props.show === false) return <div />;
    return (
      <Animated timeout={1000} className={styles.container} type={'trigger'}>
        <Spinner className={styles.spinner} type="grow" style={{ width: '4rem', height: '4rem' }} color={'danger'} />
        {this.props.text !== '' ? (
          <span className={styles.container_text}>
            {this.props.text !== '' ? this.props.text : null}
            {this.props.dot ? <span className={styles.dot}>{this.state.dot}</span> : null}
          </span>
        ) : null}
      </Animated>
    );
  }
}
