import { Icon, Input, InputGroup, InputPicker, Panel } from 'rsuite';

const styles = {
  marginBottom: 10,
};

const CustomInputGroup = ({ placeholder, ...props }) => (
  <InputGroup size='md' style={styles}>
    <Input {...props} placeholder={placeholder} />
    <InputGroup.Addon>
      <Icon icon='search' />
    </InputGroup.Addon>
  </InputGroup>
);

export default function Filters(props) {
  return (
    <Panel className='m-2' header='Filters' collapsible bordered>
      <div className='row'>
        <div className='col-md-4'>
          <div className='row'>
            <div className='col-md-6'>
              <InputPicker
                data={[
                  { label: 'Active', value: 'false' },
                  { label: 'Disabled', value: 'true' },
                ]}
                placeholder='Filter by status'
                onChange={props.onChange('status')}
                block
              />
            </div>
            <div className='col-md-6'>
              <InputPicker
                data={[
                  { label: 'Promoted', value: 'true' },
                  { label: 'Not promoted', value: 'false' },
                ]}
                placeholder='Filter by promoted'
                onChange={props.onChange('promo')}
                block
              />
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-4'>
              <InputPicker
                data={props.data}
                labelKey='nom'
                valueKey='_id'
                placeholder='Filter by establishment'
                onChange={props.onChange('ets')}
                block
              />
            </div>
            <div className='col-md-3'>
              <InputPicker
                data={props.data2}
                labelKey='nom'
                valueKey='_id'
                placeholder='Filter by menu'
                onChange={props.onChange('menu')}
                block
              />
            </div>
            <div className='col-md-5'>
              <CustomInputGroup
                name='search'
                onChange={props.onChange('name')}
                placeholder='Search...'
              />
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}
