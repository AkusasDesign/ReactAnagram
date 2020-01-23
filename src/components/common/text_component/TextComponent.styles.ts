import { createStyles } from '@material-ui/core/styles';
import theme from '../../../common/theme';

const styles = createStyles({
    card: {
        marginTop: theme.spacing(2),
    },
    cardHeader: {
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.divider,
        paddingBottom: 0,
    },
});

export default styles;
