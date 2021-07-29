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

export default function CategoryModal({
  title,
  data,
  state,
  showModal,
  closeModal,
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
        </Form>
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
