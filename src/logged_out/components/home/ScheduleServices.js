import React from "react";
import {
  Typography,
  GridListTileBar,
  GridListTile,
  isWidthUp,
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-grid-carousel'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
      fontSize: '30px',
      marginBottom:'12px',
      
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        borderRadius:'0px 0px 6px 6px'
    },
  }));


const tileData = [
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        title: "Culto de domingos",
        body: 'Domingos 11:00 p.m.'
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        title: "Culto de martes",
        body: 'Domingos 11:00 p.m.'
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        title: "Culto de sabados",
        body: 'Domingos 11:00 p.m.'
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        title: "Culto de sabados",
        body: 'Domingos 11:00 p.m.'
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        title: "Culto de sabados",
        body: 'Domingos 11:00 p.m.'
    }

]

export default function ScheduleServices(props) {
  const { width } = props;
  const classes = useStyles();
  return (
    <div style={{padding:'80px 0px'}}>
        <div style={{textAlign:'center'}}>
            <Typography
                style={{marginBottom:"10px"}}
                variant={isWidthUp("lg", width) ? "h3" : "h4"}
            >
            Nuestros servicios
            </Typography>
        </div>
        
        <Carousel cols={3} rows={1} gap={20} loop autoplay={2400} >
            {tileData.map((tile) =>(
                <Carousel.Item key={tile.img}>
                    <GridListTile  style={{listStyle:'none', }}>
                        <img style={{borderRadius:'6px 6px 0px 0px'}} width="100%" src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            title={tile.title}
                            subtitle={<span>{tile.title}</span>}
                        />
                    </GridListTile>
              </Carousel.Item>
            ))

            }
        </Carousel>
    </div>
 );
}

