import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../Redux/actions";
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
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }
    handleChange = () => event => {
        this.setState({input: event.target.value});
    };
    handleClickAddItem = () => {
       this.props.addTodo(this.state.input);
       this.setState({input: ""});

    };
    render(){
        const { classes } = this.props;

        return (
                <TextField
                    id="outlined-name"
                    label="Input"
                    fullWidth
                    className={classes.dense}
                    variant="outlined"
                    onChange={this.handleChange()}
                    value={this.state.input}
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

export default connect(null,{ addTodo })(withStyles(styles)(OutlinedTextFields));