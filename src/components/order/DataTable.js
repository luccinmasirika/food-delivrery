import { API } from '../../config';
import TablePagination from 'rsuite/lib/Table/TablePagination';
import dayjs from 'dayjs';
import { Panel, Table } from 'rsuite';
import { useState } from 'react';
import PlaceholderParagraph from 'rsuite/lib/Placeholder/PlaceholderParagraph';

export default function PaginationTable({
  data,
  total,
  page,
  pages,
  loading,
  handleChangePage,
  handleChangeLength,
  displayLength,
  handleAction,
}) {
  const onSwitch = (data) => {
    switch (data) {
      case 'PENDING_FOR_VALIDATION':
        // return { label: 'PENDING FOR VALIDATION', color: 'primary' };
        return (
          <span className='badge badge-primary badge-pill'>
            PENDING FOR VALIDATION
          </span>
        );
      case 'VALIDATED':
        // return { label: 'VALIDATED', color: 'success' };
        return (
          <span className='badge badge-success badge-pill'>VALIDATED</span>
        );
      case 'DENIED':
        // return { label: 'DENIED', color: 'danger' };
        return <span className='badge badge-danger badge-pill'>DENIED</span>;
      case 'PENDING_FOR_PAYMENT':
        // return { label: 'PENDING FOR PAYMENT', color: 'waring' };
        return (
          <span className='badge badge-waring badge-pill'>
            PENDING FOR PAYMENT
          </span>
        );
      case 'PAYIED':
        // return { label: 'PAYIED', color: 'info' };
        return <span className='badge badge-info badge-pill'>PAYIED</span>;
      case 'CANCELED':
        // return { label: 'CANCELED', color: 'teal' };
        return <span className='badge badge-teal badge-pill'>CANCELED</span>;
      case 'CLOSED':
        // return { label: 'CLOSED', color: 'indigo' };
        return <span className='badge badge-indigo badge-pill'>CLOSED</span>;

      default:
        break;
    }
  };

  return (
    <div>
      <Panel header='Filters' collapsible>
        <PlaceholderParagraph />
      </Panel>
      <Table height={370} data={data} rowHeight={60} loading={loading}>
        <Table.Column width={150} align='center' resizable={true}>
          <Table.HeaderCell>Reference</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <span className='badge badge-primary badge-pill'>
                {data.reference}
              </span>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={200} resizable={true}>
          <Table.HeaderCell>Produit</Table.HeaderCell>
          <Table.Cell>{(data) => data.produit.nom}</Table.Cell>
        </Table.Column>

        <Table.Column width={180} resizable={true}>
          <Table.HeaderCell>State</Table.HeaderCell>
          <Table.Cell>{(data) => onSwitch(data.etat)}</Table.Cell>
        </Table.Column>

        <Table.Column width={250} resizable={true}>
          <Table.HeaderCell>Client</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <span>
                {data.client.firstName} {data.client.lastName}
              </span>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={300} resizable={true}>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.Cell>
            {(data) => dayjs(data.updatedAt).format('DD MMMM YYYY - HH:mm')}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={120} fixed='right'>
          <Table.HeaderCell>Action</Table.HeaderCell>

          <Table.Cell>
            {(data) => {
              return (
                <button
                  disabled={data.etat !== 'PAYIED'}
                  onClick={() => handleAction(data)}
                  class='btn btn-indigo  btn-border btn-rounded btn-sm'
                >
                  <i
                    class={`fa ${
                      data.etat === 'CLOSED' || data.etat === 'CANCELED'
                        ? 'fa-check-circle'
                        : data.etat !== 'PAYIED'
                        ? 'fa-spinner'
                        : 'fa-check'
                    }`}
                  ></i>{' '}
                  {data.etat === 'PAYIED'
                    ? 'Close'
                    : data.etat === 'CLOSED' || data.etat === 'CANCELED'
                    ? 'Closed'
                    : 'Pending'}
                </button>
              );
            }}
          </Table.Cell>
        </Table.Column>
      </Table>

      {console.log('tot', page, total)}

      <TablePagination
        lengthMenu={[
          {
            value: 5,
            label: 5,
          },
          {
            value: 10,
            label: 10,
          },
          {
            value: 20,
            label: 20,
          },
          {
            value: 50,
            label: 50,
          },
        ]}
        activePage={page}
        displayLength={displayLength}
        total={total}
        onChangePage={handleChangePage}
        onChangeLength={handleChangeLength}
      />
    </div>
  );
}
