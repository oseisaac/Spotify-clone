import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


const Footer = () => {

    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://i.scdn.co/image/ab67616d000048511b529050987eed56bfa0a816" alt="" />
                <div className="song__info">
                    <h4>Yeah!!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon />
                <SkipPreviousIcon />
                <PlayCircleOutlineIcon />
                <SkipNextIcon />
                <RepeatIcon />
            </div>
            <div className="footer__right">

                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeUp />
                    </Grid>
                    <Grid item xs>
                        <Slider className="volume__slider" value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}

export default Footer;
