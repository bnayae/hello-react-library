import * as React from 'react';

export interface ICompBProps {
    value: string;
}

export function CompB(props: ICompBProps) {
    const { value } = props;
    return (
        <div>
            B {value}
        </div>
    );
}
