/**
 * navigation
 *
 * @package constants
 */

/**
 * router URL
 */
export const ROUTE_PATH = '/react-output-router';

/**
 * router 定義に使用
 * @type {{TOP: string, CREATE: string, DETAIL: string, EDIT: string}}
 */
export const NAVIGATION_LIST = {
  TOP: `${ROUTE_PATH}/`,
  CREATE: `${ROUTE_PATH}/create`,
  DETAIL: `${ROUTE_PATH}/detail/:id`,
  EDIT: `${ROUTE_PATH}/edit/:id`,
};

/**
 * 遷移先定義に使用
 * @type {{TOP: string, CREATE: string, DETAIL: string, EDIT: string}}
 */
export const NAVIGATION_PATH = {
  TOP: `${ROUTE_PATH}/`,
  CREATE: `${ROUTE_PATH}/create`,
  DETAIL: `${ROUTE_PATH}/detail/`,
  EDIT: `${ROUTE_PATH}/edit/`,
};
