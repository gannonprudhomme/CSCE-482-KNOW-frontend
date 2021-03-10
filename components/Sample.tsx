import * as React from 'react';

interface SampleProps {
    input: number;
}

const Sample: React.FC<SampleProps> = ({ input }) => {
    const adjusted = input + 5;

    return (
        <div>
            {adjusted}
        </div>
    );
};

export default Sample;
