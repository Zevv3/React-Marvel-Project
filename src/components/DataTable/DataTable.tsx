import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { CharacterForm } from '../CharacterForm';
import { UpdateForm } from '../UpdateForm';


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90, type: 'number',},
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
      },
      {
        field: 'desc',
        headerName: 'Description',
        width: 500,
        editable: true,
      },
      {
        field: 'num_comics',
        headerName: 'Comics Appearances',
        width: 150,
        editable: true,
        type: 'number',
      },
      {
        field: 'num_series',
        headerName: 'Series Appearances',
        width: 150,
        editable: true,
        type: 'number',
      },
      {
        field: 'num_stories',
        headerName: 'Stories Appearances',
        width: 150,
        editable: true,
        type: 'number',
      }
]

export const DataTable = () => {
  let { characterData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true)
  };
  let handleClose = () => {
    setOpen(false)
  };
  let deleteData = () => {
    serverCalls.delete(`${gridData[0]}`)
    getData()
  };
  console.log(characterData)
  const MyAuth = localStorage.getItem('myAuth');
  if (MyAuth == 'true') {
  return (
    <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={characterData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange={(newSelectionModel) => {setData(newSelectionModel)}}
                {...characterData}
            />
            {/* Popup Functionality for Update and Delete Button lives here */}
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='secondary' onClick={deleteData}>Delete</Button>
            {/* Dialog Open */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id='form-dialog-title'>Update a Character</DialogTitle>
              <DialogContent>
                <DialogContentText>Character id: {gridData[0]}</DialogContentText>
                <UpdateForm id={`${gridData[0]}`} />
                <DialogActions>
                  <Button onClick={handleClose} color='primary'>Cancel</Button>
                  <Button onClick={handleClose} color='primary'>Done</Button>
                </DialogActions>
              </DialogContent>
            </Dialog>
        </div>
    )
  } else {
    return (
      <div>
        <h3>Please Sign In To View Your Favorite Characters</h3>
      </div>
    )
  }
};

