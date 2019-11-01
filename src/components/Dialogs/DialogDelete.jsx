import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';import React from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../../utils/API';

export default function SimplePopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const confirmDelete = async () => {

    async function actionDelete() {
      const responseDelete = await api.delete(props.deletePath);

      if(responseDelete.status){
        const responseGet = await api.get(props.getRoute);
        props.setState({[props.nameState]: responseGet.data});
      }
      else{
        console.log(responseDelete)
      }
    }

    actionDelete();
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
        <Button
        variant="contained"
        color="secondary"
        onClick={handleClick}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
    <DialogTitle id="alert-dialog-title">{"Deseja Excluir esse item?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Não
          </Button>
          <Button onClick={confirmDelete} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Popover>
    </div>
  );
}