/**
 * index
 *
 * @package routers
 */
import React from 'react';
import { TodoPage } from '../pages/todo';
import { CreatePage } from '../pages/create';
import { DetailPage } from '../pages/detail';
import { EditPage } from '../pages/edit';
import { createBrowserRouter } from 'react-router-dom';
import { NAVIGATION_LIST } from '../constants/navigations';

/**
 * index
 */
export const router = createBrowserRouter([
  {
    path: NAVIGATION_LIST.TOP,
    element: <TodoPage />,
  },
  {
    path: NAVIGATION_LIST.CREATE,
    element: <CreatePage />,
  },
  {
    path: NAVIGATION_LIST.DETAIL,
    element: <DetailPage />,
  },
  {
    path: NAVIGATION_LIST.EDIT,
    element: <EditPage />,
  },
]);
