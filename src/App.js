import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function App() {
  return (
    <div className="App">
      <Container>
        <AppBar position="relative">
          <Toolbar>
            <Typography>
              My Website
            </Typography>
          </Toolbar>
        </AppBar>
        <Card>
          <CardContent>
            <Typography>
              Hello, here's some content about my website
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default App;
