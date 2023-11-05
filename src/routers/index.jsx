/**
 * index
 *
 * @package routers
 */
import React from 'react';
import { TodoPage } from '../pages/todo';
import { CreatePage } from '../pages/create';
import { createBrowserRouter } from 'react-router-dom';
import { TODO_PATH } from '../constants/pagenations';

/**
 * index
 */
export const router = createBrowserRouter([
  {
    path: TODO_PATH.TOP,
    element: <TodoPage />,
  },
  {
    path: TODO_PATH.CREATE,
    element: <CreatePage />,
  },
]);
