import {
  Button,
  ControlLabel,
  DatePicker,
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

export default function EtsModal({
  title,
  data,
  state,
  showModal,
  typeData,
  closeModal,
  btnStatus,
  handleChange,
  handleImageChange,
  handleSelectChange,
  handleSelectDateChange,
  onSubmit,
}) {
  return (
    <Modal size={'xs'} show={showModal} onHide={closeModal}>
      {state.loading && (
        <Loader backdrop content='loading...' style={{ zIndex: 10 }} vertical />
      )}
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
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
              Type <code>*</code>
            </ControlLabel>
            <InputPicker
              data={typeData}
              placeholder={
                data.type && data.type.nom ? data.type.nom : 'Select type'
              }
              onChange={handleSelectChange}
              block
            />
          </FormGroup>
          {data.type && (
            <>
              <Divider>Hour</Divider>
              <FormGroup>
                <ControlLabel>
                  Open <code>*</code>
                </ControlLabel>
                <DatePicker
                  placeholder={
                    data.ouverture
                      ? dayjs(data.ouverture).format('HH:mm')
                      : 'Select Opening Hour'
                  }
                  format='HH:mm'
                  placement='autoVerticalStart'
                  onChange={handleSelectDateChange('ouverture')}
                  ranges={[]}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  Close <code>*</code>
                </ControlLabel>
                <DatePicker
                  placeholder={
                    data.fermeture
                      ? dayjs(data.fermeture).format('HH:mm')
                      : 'Select Closure Hour'
                  }
                  format='HH:mm'
                  placement='autoVerticalStart'
                  onChange={handleSelectDateChange('fermeture')}
                  ranges={[]}
                />
              </FormGroup>
            </>
          )}
          {data.type && (
            <>
              <Divider>Location</Divider>
              <FormGroup>
                <ControlLabel>
                  Longitude <code>*</code>
                </ControlLabel>
                <FormControl name='long' value={data.long} />
              </FormGroup>
              <FormGroup>
                <ControlLabel>
                  Latitude <code>*</code>
                </ControlLabel>
                <FormControl name='lat' value={data.lat} />
              </FormGroup>
            </>
          )}
          {data.type && (
            <>
              <Divider>Image</Divider>
              <Uploader
                name='image'
                listType='picture'
                disabled={btnStatus}
                autoUpload={false}
                defaultFileList={
                  btnStatus ? [{ url: `${API}/${data.image}` }] : []
                }
                onChange={handleImageChange}
              >
                <button style={{ display: btnStatus && 'none' }}>
                  <Icon icon='camera-retro' size='lg' />
                </button>
              </Uploader>
            </>
          )}
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
