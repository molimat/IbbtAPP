import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Devocionais from "./pages/Devocionais";

const Routes = createAppContainer(
  createSwitchNavigator({
    Devocionais
  })
);

export default Routes;
