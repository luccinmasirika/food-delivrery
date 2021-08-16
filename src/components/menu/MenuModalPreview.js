import { Button, Loader, Modal, Divider } from 'rsuite';
import { API } from '../../config';
export default function MenuModalPreview({
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
          <span className='badge badge-danger float-right'>Disabled</span>
          <p className='mt-2'>{data.description}</p>
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
