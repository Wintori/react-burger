import React from 'react';
import { Outlet } from "react-router-dom";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import AppHeader from '../app-header/app-header';
import Styles from './Layout.module.scss'

const Layout = () => {
    return (
        <>
            <header>
                <AppHeader />
            </header>
            <DndProvider backend={HTML5Backend}>
                <main className={Styles.content}>
                    <Outlet />
                </main>
            </DndProvider>
        </>
    );
};

export default Layout;