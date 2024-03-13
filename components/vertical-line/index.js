import React from 'react';

const VerticalLine = ({ height }) => {
    return (
        <table style={{ height: height || '85px', marginLeft: '35px' }}>
            <tbody>
                <tr>
                    <td style={{ width: '2px', backgroundColor: '#E5E5E5',}}></td>
                </tr>
            </tbody>
        </table>
    );
};

export default VerticalLine;
