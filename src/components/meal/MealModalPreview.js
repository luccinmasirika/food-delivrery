import { Button, Loader, Modal, Icon, Divider } from 'rsuite';
import { API } from '../../config';

export default function MealModalPreview({
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
          <p className='mt-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            consectetur est alias distinctio, nam consequatur? Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Hic consectetur est
            alias distinctio, nam consequatur?
          </p>
          <Divider />
          <div className='mt-2'>
            <Icon icon='tasks' size='1x' />{' '}
            <span className='mt-2 ml-1'>{data.ets && data.ets.nom}</span>
          </div>
          <div className='mt-2'>
            <Icon icon='ticket' size='1x' />{' '}
            <span className='mt-2 ml-1'>{data.menu && data.menu.nom}</span>
          </div>
          <div className='d-flex mt-3'>
            <div className='mr-2 badge badge-teal p-2' title='Price'>
              <Icon icon='money' size='1x' />{' '}
              <span className='ml-1'>{data.prix} $</span>
            </div>
            <div className='ml-2 badge badge-indigo p-2' title='Cooking time'>
              <Icon icon='clock-o' size='1x' />{' '}
              <span className='ml-1'>{data.delais} Min</span>
            </div>
          </div>
          <Divider>Others images</Divider>
          {data.autresImages.map((el) => (
            <img
              src={`${API}/${el}`}
              alt=''
              className='img-fluid w-100 rounded mb-3'
            />
          ))}
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
