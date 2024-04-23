// Libraries
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigators
import BottomTabBar from './BottomTabBar';

// Constants
import ROUTES from '../constants/routes';

// App-Wide State Management
import WishlistContextProvider from '../store/wishlist-context';
import CartContextProvider from '../store/cart-context';

// Screens
import ProductDetails from '../screens/ProductDetails';

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <CartContextProvider>
    <WishlistContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={ROUTES.BOTTOM_TABS}
            component={BottomTabBar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ROUTES.PRODUCT_DETAILS}
            component={ProductDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WishlistContextProvider>
  </CartContextProvider>
);

export default StackNavigator;
