import { Button, Divider, Loader, Modal } from 'rsuite';
import { API } from '../../config';

export default function TypeModalPreview({
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
          <h4>{data.nom}</h4>
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
