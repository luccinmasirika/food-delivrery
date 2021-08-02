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
        <div className='col-md-2'>
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
        <div className='col-md-4'>
          <InputPicker
            data={props.data}
            labelKey='nom'
            valueKey='_id'
            placeholder='Filter by type'
            onChange={props.onChange('type')}
            block
          />
        </div>
        <div className='col-md-6'>
          <CustomInputGroup
            name='search'
            onChange={props.onChange('name')}
            placeholder='Search...'
          />
        </div>
      </div>
    </Panel>
  );
}
