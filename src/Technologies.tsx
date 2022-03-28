import React from 'react';


type TechnologiesPropsType = {
    technologiesValue: string
}

const Technologies = (props: TechnologiesPropsType) => {
    return (
        <ul>
            <li>{props.technologiesValue}</li>
        </ul>
    );
};

export default Technologies;