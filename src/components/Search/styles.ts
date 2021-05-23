import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "15rem",
    color: theme.palette.text.hint,
    "&:before": {
      borderBottom: `0.0625rem solid gray`,
    },
    "& input": {
      "&:focus": {
        color: theme.palette.text.primary,
        borderColor: 'green',
      },
    },
  },
}));

export { useStyles };
