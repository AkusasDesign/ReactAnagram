import { createStyles } from '@material-ui/core/styles';
import theme from '../../common/theme';

const styles = createStyles({
    card: {
        marginTop: theme.spacing(2),
    },
    row: {
        '&:hover': {
            cursor: 'pointer',
            '& td': {
                backgroundColor: 'rgba(0, 211, 197, 0.08)',
                borderBottomColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
            }
        },
    },
});

export default styles;