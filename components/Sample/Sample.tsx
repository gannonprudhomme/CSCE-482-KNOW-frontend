import * as React from 'react';
import * as styles from './Sample.css';

interface SampleProps {
  input: number;
}

const Sample: React.FC<SampleProps> = ({ input }) => {
  const adjusted = input + 5;

  return (
    <div className={styles.test}>
      {adjusted}
    </div>
  );
};

export default Sample;
