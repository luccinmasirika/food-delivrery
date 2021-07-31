import { API } from '../../config';
import TablePagination from 'rsuite/lib/Table/TablePagination';
import dayjs from 'dayjs';
import { Table } from 'rsuite';

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
  return (
    <div>
      <Table height={370} data={data} rowHeight={60} loading={loading}>
        <Table.Column width={150} align='center'>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.Cell className='cell-image'>
            {(data) => (
              <div className='cell-image'>
                <div className='image-container'>
                  <img
                    className='image'
                    src={`${API}/${data.image}`}
                    alt={data.nom}
                  />
                </div>
              </div>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={250} resizable={true}>
          <Table.HeaderCell>Nom</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <>
                {data.nom}{' '}
                <span
                  title='Establishment'
                  style={{ cursor: 'help' }}
                  className='badge badge-primary badge-pill'
                >
                  {data.ets.length}
                </span>
              </>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={300} flexGrow={1}>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.Cell dataKey='description' />
        </Table.Column>

        <Table.Column width={300}>
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
                  onClick={() => handleAction(data)}
                  title='Edit'
                  class='btn btn-success btn-sm btn-border box-shadow btn-circle m-1'
                >
                  <i class='fa fa-edit'></i>
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
