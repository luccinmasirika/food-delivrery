import React, { useState } from 'react';
import { API } from '../../config';
import TablePagination from 'rsuite/lib/Table/TablePagination';
import dayjs from 'dayjs';
import { Button, Icon, Modal, Panel, Table } from 'rsuite';
import PlaceholderParagraph from 'rsuite/lib/Placeholder/PlaceholderParagraph';
import Avatar from '@material-ui/core/Avatar';
import { isMobile } from 'react-device-detect';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

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
  onPromo,
  onDisableUnable,
}) {
  const [show, setShow] = useState(false);
  const [state, setState] = useState('');

  const onDisable = (data) => {
    setState(data);
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  const disableModal = (data) => {
    return (
      <div className='modal-container'>
        <Modal backdrop='static' show={show} onHide={close} size='xs'>
          <Modal.Body>
            <Icon
              icon='remind'
              style={{
                color: '#ffb300',
                fontSize: 40,
                paddingRight: 10,
                float: 'left',
              }}
            />
            {'  '}
            Once <span className='badge badge-info badge-pill'>
              {data.nom}
            </span>{' '}
            is disabled, the manu and all its products will no longer be visible
            in the application until reactivation. Are you sure you want to
            proceed?
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                onDisableUnable(data);
                setShow(false);
              }}
              color='red'
            >
              Disable
            </Button>
            <Button onClick={close} appearance='subtle'>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
  return (
    <div>
      {show && disableModal(state)}
      <Panel header='Filters' collapsible>
        <PlaceholderParagraph />
      </Panel>
      <Table height={370} data={data} rowHeight={60} loading={loading}>
        <Table.Column width={150} align='center' fixed={!isMobile && 'left'}>
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

        <Table.Column width={150} resizable={true} fixed={!isMobile && 'left'}>
          <Table.HeaderCell>Nom</Table.HeaderCell>
          <Table.Cell dataKey='nom' />
        </Table.Column>

        <Table.Column width={200}>
          <Table.HeaderCell>Establishment</Table.HeaderCell>
          <Table.Cell>{(data) => data.ets.nom}</Table.Cell>
        </Table.Column>

        <Table.Column width={170}>
          <Table.HeaderCell>Ohters images</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <AvatarGroup max={3}>
                {data.autresImages.map((x) => (
                  <Avatar alt='Remy Sharp' src={`${API}/${x}`} />
                ))}
              </AvatarGroup>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={160} flexGrow={1}>
          <Table.HeaderCell>Prix</Table.HeaderCell>
          <Table.Cell>{(data) => <span>$ {data.prix}</span>}</Table.Cell>
        </Table.Column>

        <Table.Column width={160} flexGrow={1}>
          <Table.HeaderCell>Delais</Table.HeaderCell>
          <Table.Cell>{(data) => <span>{data.delais} Min</span>}</Table.Cell>
        </Table.Column>

        <Table.Column width={120} flexGrow={1}>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <span>
                {data.disable && data.disable ? (
                  <span className='badge badge-danger badge-pill'>
                    Disabled
                  </span>
                ) : (
                  <span className='badge badge-info badge-pill'>Active</span>
                )}
              </span>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={200}>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.Cell dataKey='description' />
        </Table.Column>

        <Table.Column width={200}>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.Cell>
            {(data) => dayjs(data.updatedAt).format('DD MMMM YYYY - HH:mm')}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={180} align='center' fixed='right'>
          <Table.HeaderCell>Action</Table.HeaderCell>

          <Table.Cell>
            {(data) => {
              return (
                <>
                  <button
                    onClick={() => handleAction(data)}
                    class='btn btn-success btn-sm btn-border box-shadow btn-circle m-1'
                    title='Edit meal'
                  >
                    <i class='fa fa-edit'></i>
                  </button>
                  <button
                    title={data.disable ? 'Activate' : 'Disable'}
                    onClick={() =>
                      data.disable ? onDisableUnable(data) : onDisable(data)
                    }
                    class={`btn ${
                      !data.disable ? 'btn-danger' : 'btn-info'
                    } btn-sm btn-border box-shadow btn-circle m-1`}
                  >
                    <i
                      class={`fa ${!data.disable ? 'fa-times' : 'fa-check'}`}
                    ></i>
                  </button>
                  <button
                    onClick={() => onPromo(data)}
                    title={data.promo ? 'Promote' : 'Unpromote'}
                    class={`btn ${
                      !data.promo ? 'bg-light' : 'btn-warning'
                    } btn-sm btn-border box-shadow btn-circle m-1`}
                  >
                    <i class='fa fa-star'></i>
                  </button>
                </>
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
