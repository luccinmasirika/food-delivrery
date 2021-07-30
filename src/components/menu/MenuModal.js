import {
  Button,
  ControlLabel,
  Divider,
  Form,
  FormControl,
  FormGroup,
  Icon,
  InputPicker,
  Loader,
  Message,
  Modal,
  Uploader,
} from 'rsuite';

export default function MenuModal({
  title,
  data,
  state,
  showModal,
  closeModal,
  btnStatus,
  handleChange,
  handleImageChange,
  handleSelectChange,
  onSubmit,
  etsData,
  catData,
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
          <FormGroup>
            <ControlLabel>
              Category <code>*</code>
            </ControlLabel>
            <InputPicker
              data={catData}
              name='category'
              defaultValue={'Select category'}
              onChange={handleSelectChange('category')}
              block
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
            Establishment <code>*</code>
            </ControlLabel>
            <InputPicker
              data={etsData}
              name='ets'
              defaultValue={'Select Establishment'}
              onChange={handleSelectChange('ets')}
              block
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
          <button>
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
