import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 5,
    },
    menu: {
        width: 200,
    },
});

class OutlinedTextFields extends React.Component {
    state = {
        name: '',
        test:'',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleClickAddItem = () => {
        this.setState({test:this.state.name});
    };
    render(){
        const { classes } = this.props;

        return (
                <TextField
                    id="outlined-name"
                    label="Input"
                    fullWidth
                    className={classes.dense}
                    onChange={this.handleChange('name')}
                    margin="dense"
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Add Item"
                                    onClick={this.handleClickAddItem}
                                ><SendIcon/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);