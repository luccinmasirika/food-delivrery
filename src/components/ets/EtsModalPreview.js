import { Button, Loader, Modal, Icon, Divider } from 'rsuite';
import { API } from '../../config';
import dayjs from 'dayjs';

export default function EtsModalPreview({
  data,
  state,
  showModal,
  closeModal,
}) {
  return (
    <Modal size='xs' show={showModal} onHide={closeModal}>
      {state.loading && (
        <Loader backdrop content='loading...' style={{ zIndex: 10 }} vertical />
      )}
      <Modal.Header>Preview</Modal.Header>

      <Modal.Body>
        <div className='container'>
          <img
            src={`${API}/${data.image}`}
            className='img-fluid rounded'
            alt=''
            width='100%'
            srcset=''
          />
          <Divider />
          <span className='h4'>{data.nom}</span>
          <span
            className={`badge badge-${
              data.disable ? 'danger' : 'info'
            } float-right`}
          >
            {data.disable ? 'Disabled' : 'Active'}
          </span>
          <p className='mt-2'>{data.description}</p>
          <Divider />
          <div className='mt-2'>
            <Icon icon='tasks' size='1x' />{' '}
            <span className='mt-2'>{data.type && data.type.nom}</span>
          </div>
          <div className='d-flex mt-3'>
            <div className='mr-2 badge badge-success p-2' title='Opening Hour'>
              <Icon icon='clock-o' size='1x' />{' '}
              <span>{dayjs(data.ouverture).format('HH:mm')}</span>
            </div>
            <div className='ml-2 badge badge-danger p-2' title='Closure Hour'>
              <Icon icon='clock-o' size='1x' />{' '}
              <span>{dayjs(data.fermeture).format('HH:mm')}</span>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal} appearance='ghost'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
