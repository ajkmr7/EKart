// Libraries
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigators
import BottomTabBar from './BottomTabBar';

// Constants
import ROUTES from '../constants/routes';
import COLORS from '../constants/colors';

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
            options={{
              headerTitleStyle: {display: 'none'},
              headerStyle: {
                backgroundColor: COLORS.primary100,
                shadowOffset: 0,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WishlistContextProvider>
  </CartContextProvider>
);

export default StackNavigator;
