import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './Header.style';
import { Link as RouterLink } from 'react-router-dom';

/* Material UI */
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

/* Icons */
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
import CodeIcon from '@material-ui/icons/Code';

interface Props {
    classes: any;
}

interface State {
    open: boolean;
}

class Header extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            open: false,
        }

        this.handleDrawer = this.handleDrawer.bind(this);
    }

    handleDrawer() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar
                    position="static"
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawer.bind(this)}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                        <RouterLink className={classes.logoLink} to="/">
                            <Typography variant="h6" noWrap>
                                React Anagram
                            </Typography>
                        </RouterLink>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={this.state.open}
                    onClose={this.handleDrawer}
                    className={classes.drawer}
                >
                    <List>
                        <ListItem button component={RouterLink} to="/" onClick={this.handleDrawer}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={RouterLink} to="/about/project" onClick={this.handleDrawer}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="About the Project" />
                        </ListItem>
                        <ListItem button component={RouterLink} to="/about/designer" onClick={this.handleDrawer}>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="About the Designer" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button component={RouterLink} to="/anagram" onClick={this.handleDrawer}>
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText primary="What is an anagram?" />
                        </ListItem>
                        <ListItem button component={RouterLink} to="/anagrams" onClick={this.handleDrawer}>
                            <ListItemIcon>
                                <CodeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Anagram Test" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(Header);