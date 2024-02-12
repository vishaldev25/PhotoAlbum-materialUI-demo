import { makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.pallete.backgroundColor.paper,
    padding: theme.spacing(8,0,6),
  }
}))

export default useStyles