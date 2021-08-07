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

import { API } from '../../config';

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
  onFinish,
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
        <Steps current={current}>
          <Steps.Item title='Main' />
          <Steps.Item title='Other' />
        </Steps>
        <Divider />

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
                  placeholder={
                    data.ets.nom ? data.ets.nom : 'Select Establishment'
                  }
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
                      placeholder={
                        data.menu.nom ? data.menu.nom : 'Select Menu'
                      }
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
                      placeholder={data.prix}
                      min={0.1}
                      step={0.1}
                      onChange={handleSelectChange('prix')}
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
                      placeholder={data.delais}
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
              defaultFileList={
                btnStatus ? [{ url: `${API}/${data.image}` }] : []
              }
            >
              <button style={{ display: btnStatus && 'none' }}>
                <Icon icon='camera-retro' size='lg' />
              </button>
            </Uploader>
          </>
        )}
        {current >= 1 && (
          <>
            <Divider>Other Images</Divider>
            <Uploader
              name='image'
              listType='picture'
              draggable
              multiple
              action={data.link}
            >
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
          {current < 1 ? 'Next' : 'Finish'}
        </Button>
        <Button onClick={closeModal} appearance='subtle'>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
