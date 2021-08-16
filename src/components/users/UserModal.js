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
import dayjs from 'dayjs';

import { API } from '../../config';

export default function UserModal({
  data,
  state,
  showModal,
  roleData,
  sexeData,
  closeModal,
  btnStatus,
  handleChange,
  handleImageChange,
  handleRoleChange,
  handleSexeChange,
  onSubmit,
}) {
  return (
    <Modal size={'xs'} show={showModal} onHide={closeModal}>
      {state.loading && (
        <Loader backdrop content='loading...' style={{ zIndex: 10 }} vertical />
      )}
      <Modal.Header>
        <Modal.Title>Create new user</Modal.Title>
        {state.error && (
          <Message
            type='error'
            description={state.error}
            style={{ margin: '15px 0 0 0' }}
          />
        )}
      </Modal.Header>
      <Modal.Body>
        <Form fluid onChange={handleChange}>
          <FormGroup>
            <ControlLabel>
              First Name <code>*</code>
            </ControlLabel>
            <FormControl name='firstName' />
          </FormGroup>

          <FormGroup>
            <ControlLabel>
              Last Name <code>*</code>
            </ControlLabel>
            <FormControl name='lastName' />
          </FormGroup>

          <FormGroup>
            <ControlLabel>
              Email <code>*</code>
            </ControlLabel>
            <FormControl name='email' />
          </FormGroup>

          <FormGroup>
            <ControlLabel>
              Password <code>*</code>
            </ControlLabel>
            <FormControl name='password' />
          </FormGroup>

          <FormGroup>
            <ControlLabel>
              Role <code>*</code>
            </ControlLabel>
            <InputPicker
              data={roleData}
              placeholder='Select role'
              onChange={handleRoleChange}
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
