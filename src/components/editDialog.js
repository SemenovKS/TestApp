import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles ={
    green: {
        color: 'green',
    },
    red: {
        color: 'red',
    },
};
class EditDialog extends React.Component {
    state = {
        open: false,
        editItem: this.props.item
    };

    handleChange = () => event => {
        const tmpItem = this.state.editItem;
        tmpItem.content = event.target.value;
        this.setState({editItem: tmpItem});
    };

    handleListItemSave = () => {
        this.props.editTodo(this.state.editItem, this.props.itemIndex);
        this.setState({ open: false });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleClickDelete = () => {
        if (window.confirm(`Подтвердите удаление элемента ${this.state.editItem.content}.`)) {
            this.props.deleteTodo(this.props.itemIndex);
            this.setState({open: false});
        };
    };

    render() {
        const  { classes } = this.props;
        const { editItem } = this.state;
        return (
            <div>
                <IconButton aria-label = "Edit" onClick={this.handleClickOpen}>
                    <EditIcon/>
                </IconButton>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Редактирование</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            value={editItem.content}
                            onChange={this.handleChange()}
                            id="name"
                            label="Ввод:"
                            type="Text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClickDelete} className={classes.red}>
                            <DeleteIcon/>
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Отмена
                        </Button>
                        <Button onClick={this.handleListItemSave} className={classes.green}>
                            Сохранить
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default (withStyles(styles)(EditDialog));