import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import ReactTableBase from 'app/components/table/ReactTableBase';

const OrdersListTable = ({ orderListTableData }) => {
  const tableConfig = {
    isEditable: false,
    isSortable: true,
    isResizable: false,
    withPagination: true,
    withSearchEngine: true,
    manualPageSize: [10, 20, 30, 40],
    placeholder: 'Search...',
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Orders list</h5>
          </div>
          <ReactTableBase
            columns={orderListTableData.tableHeaderData}
            data={orderListTableData.tableRowsData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrdersListTable;
