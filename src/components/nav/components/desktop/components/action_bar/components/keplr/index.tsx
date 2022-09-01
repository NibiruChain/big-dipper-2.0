import React from 'react';
import classnames from 'classnames';
import KeplrIcon from '@assets/keplr.png';
import { suggestChain } from './hooks';
import { useStyles } from './styles';

const Keplr: React.FC<{
  className?: string;
}> = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div
        onClick={suggestChain}
        role="button"
        className={classnames(props.className, classes.icon)}
      >
        <img
          src={KeplrIcon.src}
          style={{
            width: '24px',
            height: '24px',
          }}
          alt="Add Nibiru to Keplr"
        />
      </div>
    </div>
  );
};

export default Keplr;
