import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FunctionComponent<Props> = ({ children }) => {
  return <div className='container'>{children}</div>;
};

export default Wrapper;
