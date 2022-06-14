import React from 'react';

const ReactTableFooter = ({ footerGroups }) => (
  <tfoot className="tfoot">
    {footerGroups.map(group => (
      <tr {...group.getFooterGroupProps()}>
        {group.headers.map(column => (
          <td {...column.getFooterProps()}>{column.render('Footer')}</td>
        ))}
      </tr>
    ))}
  </tfoot>
);

export default ReactTableFooter;
