import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../config';
import TablePagination from 'rsuite/lib/Table/TablePagination';
import data from './fakedata.json';
import dayjs from 'dayjs';
import { Table, Icon, IconButton } from 'rsuite';

export default function PaginationTable({
  data,
  total,
  page,
  pages,
  loading,
  handleChangePage,
  handleChangeLength,
  displayLength,
  handleAction,
}) {
  return (
    <div>
      <Table height={420} data={data} rowHeight={60} loading={loading}>
        <Table.Column width={150} align='center'>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.Cell>
            {(data) => (
              <span>
                <img
                  width='auto'
                  height='34'
                  src={`${API}/${data.image}`}
                  alt={data.nom}
                />
              </span>
            )}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={250} resizable={true}>
          <Table.HeaderCell>Nom</Table.HeaderCell>
          <Table.Cell dataKey='nom' />
        </Table.Column>

        <Table.Column width={300} flexGrow={1}>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.Cell dataKey='description' />
        </Table.Column>

        <Table.Column width={300}>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.Cell>
            {(data) => dayjs(data.updatedAt).format('DD MMMM YYYY - HH:mm')}
          </Table.Cell>
        </Table.Column>

        <Table.Column width={120} fixed='right'>
          <Table.HeaderCell>Action</Table.HeaderCell>

          <Table.Cell>
            {(data) => {
              return (
                <button
                  onClick={() => handleAction(data)}
                  class='btn btn-success btn-border btn-rounded btn-sm'
                >
                  <i class='fa fa-edit'></i> Edit
                </button>
              );
            }}
          </Table.Cell>
        </Table.Column>
      </Table>

      <TablePagination
        lengthMenu={[
          {
            value: 5,
            label: 5,
          },
          {
            value: 10,
            label: 10,
          },
          {
            value: 20,
            label: 20,
          },
          {
            value: 50,
            label: 50,
          },
        ]}
        activePage={page}
        displayLength={displayLength}
        total={total}
        onChangePage={handleChangePage}
        onChangeLength={handleChangeLength}
      />
    </div>
  );
}
