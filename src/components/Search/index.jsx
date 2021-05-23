import { FormControl, Input, InputAdornment } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import React from "react";
import { useStyles } from "./styles";

const Search = ({
  placeholder,
  onChange,
  className,
}) => {
  // Styles
  const classes = useStyles();

  return (
    <FormControl data-testid="search">
      <Input
        role="Search"
        className={`${classes.root} ${className}`}
        onChange={onChange}
        id="input-with-icon-adornment"
        placeholder={placeholder}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export { Search };
