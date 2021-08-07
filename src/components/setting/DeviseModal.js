import {
  Button,
  ControlLabel,
  Form,
  FormGroup,
  Icon,
  Input,
  InputNumber,
  InputPicker,
  Loader,
  Message,
  Modal,
  SelectPicker,
  Uploader,
} from 'rsuite';

export default function DeviseModal({
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
        <Modal.Title>Update {data.nom} currency data</Modal.Title>
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
              Currency <code>*</code>
            </ControlLabel>
            <Input
              defaultValue={data.nom}
              min={1}
              step={1}
              onChange={handelChange('nom')}
              block
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Exchange rate <code>*</code>
            </ControlLabel>
            <InputNumber
              min={0.1}
              step={0.1}
              disabled={data.taux === 1}
              defaultValue={data.taux}
              onChange={handelChange('taux')}
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
