import TablePagination from 'rsuite/lib/Table/TablePagination';
import dayjs from 'dayjs';
import { Table } from 'rsuite';
import { isMobile } from 'react-device-detect';

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
        return (
          <span className='badge badge-primary badge-pill'>
            PENDING FOR VALIDATION
          </span>
        );
      case 'VALIDATED':
        return (
          <span className='badge badge-success badge-pill'>VALIDATED</span>
        );
      case 'DENIED':
        return <span className='badge badge-danger badge-pill'>DENIED</span>;
      case 'PENDING_FOR_PAYMENT':
        return (
          <span className='badge badge-warning badge-pill'>
            PENDING FOR PAYMENT
          </span>
        );
      case 'PAYIED':
        return <span className='badge badge-info badge-pill'>PAYIED</span>;
      case 'CANCELED':
        return <span className='badge badge-teal badge-pill'>CANCELED</span>;
      case 'CLOSED':
        return <span className='badge badge-indigo badge-pill'>CLOSED</span>;
      default:
        break;
    }
  };

  return (
    <div>
      <Table height={370} data={data} rowHeight={60} loading={loading}>
        <Table.Column
          width={150}
          align='center'
          resizable={true}
          fixed={!isMobile && 'left'}
        >
          <Table.HeaderCell>Reference</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <span className='badge badge-primary badge-pill'>
                {data.reference}
              </span>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={150} resizable={true} fixed={!isMobile && 'left'}>
          <Table.HeaderCell>Produit</Table.HeaderCell>
          <Table.Cell>{(data) => data.produit.nom}</Table.Cell>
        </Table.Column>

        <Table.Column width={150} resizable={true}>
          <Table.HeaderCell>Establishment</Table.HeaderCell>
          <Table.Cell>{(data) => data.ets.nom}</Table.Cell>
        </Table.Column>

        <Table.Column width={150} align='center' resizable={true}>
          <Table.HeaderCell>Produit</Table.HeaderCell>
          <Table.Cell>{(data) => `${data.prix.toFixed(2)} $`}</Table.Cell>
        </Table.Column>

        <Table.Column width={150} align='center' resizable={true}>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
          <Table.Cell dataKey='quantity' />
        </Table.Column>

        <Table.Column width={180} resizable={true}>
          <Table.HeaderCell>State</Table.HeaderCell>
          <Table.Cell>{(data) => onSwitch(data.etat)}</Table.Cell>
        </Table.Column>

        <Table.Column width={200} resizable={true}>
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

        <Table.Column width={150} resizable={true} fixed={!isMobile && 'right'}>
          <Table.HeaderCell>Delivrery man</Table.HeaderCell>
          <Table.Cell>
            {(data) =>
              data.livreur ? (
                <span>
                  {data.livreur.firstName} {data.livreur.lastName}
                </span>
              ) : (
                <span>-</span>
              )
            }
          </Table.Cell>
        </Table.Column>

        <Table.Column width={140} align='center' fixed='right'>
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
