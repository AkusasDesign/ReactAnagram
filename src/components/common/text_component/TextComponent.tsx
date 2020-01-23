import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './TextComponent.styles';

/* Material UI */
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

interface Props {
    children: any;
    classes: any;
    title?: string;
}

class TextComponent extends Component<Props> {
    render() {
        const { children, classes, title } = this.props;
        return (
            <Card className={classes.card}>
                {title && <CardHeader
                    className={classes.cardHeader}
                    title={<Typography variant="h6">{title}</Typography>}
                />}
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(TextComponent);