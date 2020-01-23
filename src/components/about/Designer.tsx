import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography  from '@material-ui/core/Typography';

/* Components */
import TextComponent from '../../components/common/text_component/TextComponent';

class Designer extends Component {
    render() {
        return (
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextComponent title="About the Designer">
                        <Typography variant="body1">
                            This project was created and worked upon by Christopher Iain Hansen. He is a Front-End developer from Akusas Design. He has a few years of experience in design, as well as an engineering bachelor. He is as interested in the overall design as well as the functionality. Front-End and UI/UX is something that he looks upon as one package.
                        </Typography>
                    </TextComponent>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextComponent title="About Akusas Design">
                        <Typography variant="body1">
                            Akusas Design is a small design company based in Norway's oldest town Tønsberg.
                        </Typography>
                    </TextComponent>
                </Grid>
            </Grid>
        );
    }
}

export default Designer;
