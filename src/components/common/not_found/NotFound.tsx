import React from 'react';

/* Material UI */
import Typography from '@material-ui/core/Typography';

/* Components */
import TextComponent from '../text_component/TextComponent';

const NotFound: React.FC = () => {
    return (
        <TextComponent title="404 Page Not Found">
            <Typography variant="body1">
                It would seem that we could not find what you were looking for. Check that the URL is correct.
            </Typography>
        </TextComponent>
    );
}

export default NotFound;
