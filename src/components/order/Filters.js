import { InputPicker, Panel } from 'rsuite';

export default function Filters(props) {
  return (
    <Panel
      className='m-2'
      header='Filters'
      collapsible
      bordered
      defaultExpanded
    >
      <div className='row'>
        <div className='col-md-3'>
          <InputPicker
            data={[
              {
                label: 'PENDING FOR VALIDATION',
                value: 'PENDING_FOR_VALIDATION',
              },
              { label: 'VALIDATED', value: 'VALIDATED' },
              { label: 'DENIED', value: 'DENIED' },
              { label: 'PENDING FOR PAYMENT', value: 'PENDING_FOR_PAYMENT' },
              { label: 'PAYIED', value: 'PAYIED' },
              { label: 'CANCELED', value: 'CANCELED' },
              { label: 'CLOSED', value: 'CLOSED' },
            ]}
            placeholder='Filter by status'
            onChange={props.onChange('status')}
            block
          />
        </div>
        <div className='col-md-3'>
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
            placeholder='Filter by delivrery man'
            onChange={props.onChange('livreur')}
            block
          />
        </div>
        <div className='col-md-3'>
          <InputPicker
            data={props.data3}
            labelKey='nom'
            valueKey='_id'
            placeholder='Filter by type'
            onChange={props.onChange('type')}
            block
          />
        </div>
      </div>
    </Panel>
  );
}
