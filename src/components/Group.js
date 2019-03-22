import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditIcon from '@material-ui/icons/Edit';

const styles = () => ({
    root: {
        width: '100%',
        marginTop: 4,
        backgroundColor: 'white',
    },
});

    class FolderList extends React.Component {
        state = {
            selectedIndex: null,
        };
        handleListItemClick = (index) => {
            console.log(index);
            this.setState({selectedIndex: index});
        };
        render() {
            const {classes, items} = this.props;
            const {selectedIndex} = this.state;
            return (
                <React.Fragment>
                    <b>{selectedIndex}</b>
                <List className={classes.root}>
                    {items.map((item,index) => (
                    <ListItem
                        key={index}
                        button
                        onClick={() => this.handleListItemClick(index)}
                    >
                        <Avatar>
                        <ImageIcon/>
                        {item}
                        </Avatar>
                        <ListItemText primary={ item} secondary="Jan 9, 2014"/>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete">
                                <EditIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                        ))}
                </List>
                </React.Fragment>
            );
        }
    }

FolderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);