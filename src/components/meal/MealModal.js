import { useState } from 'react';
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
  Steps,
  Uploader,
} from 'rsuite';

export default function MealModal({
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
  menuData,
  current,
  onFinish
}) {
  return (
    <Modal size={'xs'} show={showModal} onHide={closeModal}>
      {state.loading && (
        <Loader backdrop content='loading...' style={{ zIndex: 10 }} vertical />
      )}
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Steps current={current}>
          <Steps.Item title='Main' />
          <Steps.Item title='Other' />
        </Steps>
        <Divider />
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

        {current < 1 && (
          <>
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
                Establishment <code>*</code>
                </ControlLabel>
                <InputPicker
                  data={etsData}
                  name='ets'
                  value={data.ets}
                  defaultValue={'Select Establishment'}
                  onChange={handleSelectChange('ets')}
                  block
                />
              </FormGroup>

              {data.ets && (
                <>
                  <FormGroup>
                    <ControlLabel>
                      Menu <code>*</code>
                    </ControlLabel>
                    <InputPicker
                      data={menuData}
                      name='menu'
                      value={data.menu}
                      defaultValue={'Select Menu'}
                      onChange={handleSelectChange('menu')}
                      block
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>
                      Prix <code>*</code>
                    </ControlLabel>
                    <InputNumber
                      postfix='$'
                      defaultValue={0.1}
                      min={0.1}
                      onChange={handleSelectChange('prix')}
                      step={0.1}
                      block
                    />
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>
                      Cooking times <code>*</code>
                    </ControlLabel>
                    <InputNumber
                      postfix='Min'
                      onChange={handleSelectChange('delais')}
                      defaultValue={1}
                      min={0}
                      block
                    />
                  </FormGroup>
                </>
              )}
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
          </>
        )}
        {current >= 1 && (
          <>
            <Divider>Other Images</Divider>
            <Uploader name='image' listType='picture' action={data.link}>
              <button>
                <Icon icon='camera-retro' size='4x' />
              </button>
            </Uploader>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={current < 1 ? onSubmit : onFinish}
          appearance='primary'
        >
          {current < 1 ? 'Submit' : 'Finish'}
        </Button>
        <Button onClick={closeModal} appearance='subtle'>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
