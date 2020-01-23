import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

/* Components */
import TextComponent from '../../components/common/text_component/TextComponent';

/* Icons */
import AccountTreeIcon from '@material-ui/icons/AccountTree';

const dependencies = [
    { name: 'Material UI', link: 'https://www.npmjs.com/package/@material-ui/core' },
    { name: 'React Router', link: 'https://www.npmjs.com/package/react-router-dom' },
]

class Project extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextComponent title="About the Project">
                        <Typography variant="body1">
                            The project was build using the typescript template for create-react-app. Alongside this, then there were a few extra dependencies that were added. These are all listed.
                        </Typography>
                    </TextComponent>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextComponent title="Dependencies">
                        <List>
                            {dependencies.map((item, index) => {
                                return (
                                    <ListItem button component={RouterLink} key={index} to={item.link}>
                                        <ListItemIcon>
                                            <AccountTreeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </TextComponent>
                </Grid>
            </Grid>
        );
    }
}

export default Project;