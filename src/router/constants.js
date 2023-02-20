export const MainRoutes = {
  Home: "/",
  MyAccount: "/my-account",
};

export const MyAccountRoutes = {
  Dashboard: `${MainRoutes.MyAccount}/dashboard`,
  Orders: `${MainRoutes.MyAccount}/orders`,
};
