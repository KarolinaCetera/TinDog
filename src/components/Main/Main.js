import React from 'react';
import './Main.scss';
import Nav from '../Nav/Nav';
import Pic from '../Pic/Pic';
import InfoBar from '../InfoBar/InfoBar';
import FavPanel from '../FavPanel/FavPanel';

const Main = () => {
    return (
        <>
            <Nav/>
            <Pic/>
            <InfoBar/>
            <FavPanel/>
        </>
    );
};

export default Main;
