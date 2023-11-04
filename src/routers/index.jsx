import React from 'react';
import { TodoPage } from '../pages/todo';
import { createBrowserRouter } from 'react-router-dom';
import { TODO_PAGE } from '../constants/pagenation';

export const router = createBrowserRouter([
  {
    path: TODO_PAGE.TOP,
    element: <TodoPage />,
  },
]);
