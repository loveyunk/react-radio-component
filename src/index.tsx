import * as React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
// import styles from './styles.less';

export interface RadioProps {
  className: string;
  prefixCls: string;
}

export interface RadioState {}

class Radio extends React.Component<RadioProps, RadioState> {
  static propTypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string
  };

  static defaultProps: Partial<RadioProps> = {
    className: '',
    prefixCls: 'lv-radio'
  };

  constructor(props: RadioProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, prefixCls, children } = this.props;

    const classes = classNames(className, prefixCls, {});

    return (
      <label>
        <span className={classes}>
          <input type='radio' />
        </span>
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    );
  }
}

export default Radio;
