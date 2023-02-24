export const MainRoutes = {
  Home: "/",
  MyAccount: "/my-account",
};

export const MyAccountRoutes = {
  Dashboard: `${MainRoutes.MyAccount}/dashboard`,
  Orders: `${MainRoutes.MyAccount}/orders`,
  Address: `${MainRoutes.MyAccount}/address`,
  AccountDetails: `${MainRoutes.MyAccount}/account-details`,
};
