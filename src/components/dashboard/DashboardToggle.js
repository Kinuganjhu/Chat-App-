import React from 'react';
import {Button,Icon,Drawer} from 'rsuite';
import { useStateModal, useMediaQuery } from '../../misc/custom-hooks';
import Dashboard from '.';
const DashboardToggle =()=>{
 const {isOpen, open, close} = useStateModal();
const isMobile =  useMediaQuery('max-width: 992px');
  return (
    <>
  <Button block color ="blue"onClick ={open}>
  <Icon icon ="dashboard"/> Dashboard
  </Button>
  <Drawer full ={isMobile} show = {isOpen} onHide = {close}placement ="left">
  <Dashboard/>
  </Drawer>
    </>
    );
}
export default DashboardToggle;