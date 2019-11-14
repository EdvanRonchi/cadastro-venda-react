import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import { Link } from "react-router-dom";
import Produto from "../produtos";
import Cliente from "../clientes";
import ProdutoCadastro from "../cadastro-produtos";
import ClienteCadastro from "../cadastro-clientes";
import "./style.css";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Edvan Ronchi
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem>
              <ListItemIcon><AddIcon/></ListItemIcon>
              <ListItemText primary="Cadastros" />
              </ListItem>
            <Link to="/cadastro-produtos">
              <ListItem button>
                <ListItemIcon><ViewWeekIcon/></ListItemIcon>
                <ListItemText primary="Produtos" />
              </ListItem>
            </Link>
            <Link to="/cadastro-clientes">
              <ListItem button>
                <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                <ListItemText primary="Clientes" />
              </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
            <ListItem>
              <ListItemIcon><ListIcon/></ListItemIcon>
              <ListItemText primary="Listagens" />
              </ListItem>
            <Link to="/produtos">
              <ListItem button>
                <ListItemIcon><ViewWeekIcon/></ListItemIcon>
                <ListItemText primary="Produtos" />
              </ListItem>
            </Link>
            <Link to="/clientes">
            <ListItem button>
              <ListItemIcon><AccountBoxIcon /></ListItemIcon>
              <ListItemText primary="Clientes" />
              </ListItem>
            </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader}/>
          <div className="main-box">
            {props.show === "cadastro-produtos" && (<ProdutoCadastro/>)}
            {props.show === "cadastro-clientes" && (<ClienteCadastro/>)}
            
            {props.show === "produtos" && (<Produto/>)}
            {props.show === "clientes" && (<Cliente/>)}
          </div>
      </main>
    </div>
  );
}