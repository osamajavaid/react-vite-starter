// Translate.js
import React from 'react';
import { FormattedMessage } from 'react-intl';

const Translate = ({ text, values }) => (
    <FormattedMessage
        id={text}
        defaultMessage={text}
    // values={values}
    />
);

export default Translate;


// ------------------------\\
// ---------usage-----------\\
// --------------------------\\

{/* <Translate
    id="greeting"
    defaultMessage="Hello, {name}!"
    values={{ name: 'World' }}
/> */}