import {
  Button,
  ControlLabel,
  Divider,
  Form,
  FormControl,
  FormGroup,
  Icon,
  InputNumber,
  InputPicker,
  Loader,
  Message,
  Modal,
  SelectPicker,
  Uploader,
} from 'rsuite';

export default function ConfigModal({
  data,
  state,
  showModal,
  closeModal,
  handelChange,
  deviseData,
  onSubmit,
}) {
  return (
    <Modal size={'xs'} show={showModal} onHide={closeModal}>
      {state.loading && (
        <Loader backdrop content='loading...' style={{ zIndex: 10 }} vertical />
      )}
      <Modal.Header>
        <Modal.Title>Configuration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {state.error && (
          <Message
            type='error'
            description={state.error}
            style={{ marginBottom: '15px' }}
          />
        )}

        <Form fluid>
          <FormGroup>
            <ControlLabel>
              Delivrery radius <code>*</code>
            </ControlLabel>
            <InputNumber
              postfix='Km'
              placeholder={1}
              defaultValue={data.rayonLimite}
              min={1}
              step={1}
              onChange={handelChange('rayonLimite')}
              block
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Fee per Km <code>*</code>
            </ControlLabel>
            <InputNumber
              postfix='$'
              placeholder={0.1}
              min={0.1}
              step={0.1}
              defaultValue={data.fraisParKm}
              onChange={handelChange('fraisParKm')}
              block
            />
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
