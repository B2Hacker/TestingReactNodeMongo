import React from 'react';
import '../App.css';
import {Button} from './Button';
import './VideoSection.css';

function VideoSection() {
    return (
        <div className='video-container'>
            <video src="/Videos/SUF.mp4" autoPlay loop muted />
            <h1>Video Example</h1>
            <p>Im just testing stuff idk</p>
            <div className='video-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                CLICK ON HERE
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH VIDEO <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default VideoSection
