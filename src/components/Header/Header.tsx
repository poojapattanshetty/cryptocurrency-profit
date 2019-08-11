import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  return (
    <AppBar>
      <Toolbar className="toolbar">
        <Typography variant="h6" aria-label="You are viewing cryptocurrency app">cryptocurrency</Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
