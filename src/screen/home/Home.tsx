import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './Home.styles';

/* Material UI */
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

/* Components */
import TextComponent from '../../components/common/text_component/TextComponent';
import { Button } from '@material-ui/core';

/* Icons */
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

interface Props {
    classes: any;
}

class Home extends Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextComponent title="React Anagram Test">
                    <Typography variant="body1">
                        This is a test for <Link href="https://www.protectorforsikring.no/">Protector Forsikring</Link>. The test included an attached file. This attached file was a glossary of one word per line. The task was to create a program that would find all the words in the list that have one or more anagrams. These were to be listed together with the original word.
                    </Typography>
                </TextComponent>
                <TextComponent>
                    <Button
                        className={classes.button}
                        color="primary"
                        component={RouterLink}
                        to="/anagrams"
                        variant="outlined"
                    >Check out the test <DoubleArrowIcon /></Button>
                </TextComponent>
            </div>
        );
    }
}

export default withStyles(styles)(Home);