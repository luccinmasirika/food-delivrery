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
      <Table height={420} data={data} rowHeight={60} loading={loading}>
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

        <Table.Column width={200} resizable={true}>
          <Table.HeaderCell>Nom</Table.HeaderCell>
          <Table.Cell dataKey='nom' />
        </Table.Column>

        <Table.Column width={150}>
          <Table.HeaderCell>Hours</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <span>
                {data.heure && dayjs(data.heure.ouverture).format('HH:mm')} to{' '}
                {data.heure && dayjs(data.heure.fermeture).format('HH:mm')}
              </span>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={200} flexGrow={1}>
          <Table.HeaderCell>Localisation</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <span>
                Long:{' '}
                {data.localisation &&
                  dayjs(data.localisation.long).format('HH:mm')}
                - Lat:{' '}
                {data.localisation &&
                  dayjs(data.localisation.lat).format('HH:mm')}
              </span>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={100} flexGrow={1}>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <span>
                {data.disable && data.disable ? 'Disabled' : 'Active'}
              </span>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={200}>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.Cell>
            {(data) => dayjs(data.updatedAt).format('DD MMMM YYYY - HH:mm')}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={200} flexGrow={1}>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.Cell>
            {(data) => <span>{data.type && data.type.nom}</span>}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={300} flexGrow={1}>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.Cell dataKey='description' />
        </Table.Column>

        <Table.Column width={120} fixed='right'>
          <Table.HeaderCell>Action</Table.HeaderCell>

          <Table.Cell>
            {(data) => {
              return (
                <button
                  onClick={() => handleAction(data)}
                  class='btn btn-success btn-border btn-rounded btn-sm'
                >
                  <i class='fa fa-edit'></i> Edit
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
