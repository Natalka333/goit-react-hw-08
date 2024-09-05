import { Suspense } from 'react';
import { Outlet } from 'react-router-dom'; // Outlet для отображения вложенных маршрутов

import AppBar from '../components/AppBar/AppBar';

// Компонент Layout служит базовым шаблоном для всех страниц
export const Layout = ({ children }) => {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <AppBar />

            {/* Suspense для отложенной загрузки дочерних компонентов */}
            {/* fallback={<div>Loading...</div>} показывает текст "Loading..." пока дочерние компоненты загружаются */}
            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>

            {/* Outlet отображает вложенные маршруты, определенные в файле маршрутизации */}
            <Outlet />
        </div>
    )
};