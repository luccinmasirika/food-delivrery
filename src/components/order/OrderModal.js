import {
  Button,
  ControlLabel,
  Divider,
  Form,
  FormControl,
  FormGroup,
  Icon,
  Loader,
  Message,
  Modal,
  Uploader,
} from 'rsuite';

export default function OrderModal({
  title,
  data,
  state,
  showModal,
  closeModal,
  btnStatus,
  handleChange,
  handleImageChange,
  onSubmit,
}) {
  return (
    <Modal size={'xs'} show={showModal} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {state.loading && (
          <Message
            description={<Loader content='Loading...' />}
            style={{ marginBottom: '15px' }}
          />
        )}

        {state.error && (
          <Message
            type='error'
            description={state.error}
            style={{ marginBottom: '15px' }}
          />
        )}

        <Form fluid onChange={handleChange}>
          <FormGroup>
            <ControlLabel>
              Name <code>*</code>
            </ControlLabel>
            <FormControl name='nom' value={data.nom} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Description <code>*</code>
            </ControlLabel>
            <FormControl
              rows={3}
              name='description'
              value={data.description}
              componentClass='textarea'
            />
          </FormGroup>
        </Form>
        <Divider>Image</Divider>
        <Uploader
          name='image'
          listType='picture'
          disabled={btnStatus}
          autoUpload={false}
          onChange={handleImageChange}
        >
          <button style={{ display: btnStatus && 'none' }}>
            <Icon icon='camera-retro' size='lg' />
          </button>
        </Uploader>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSubmit} appearance='primary'>
          Submit
        </Button>
        <Button onClick={closeModal} appearance='subtle'>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
