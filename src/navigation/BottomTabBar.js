// Libraries
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import WishlistScreen from '../screens/WishlistScreen';

// Constants
import COLORS from '../constants/colors';
import ROUTES from '../constants/routes';

// App-Wide State Management
import WishlistContextProvider from '../store/wishlist-context';
import CartContextProvider from '../store/cart-context';

const BottomTabs = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <CartContextProvider>
      <WishlistContextProvider>
        <NavigationContainer>
          <BottomTabs.Navigator
            screenOptions={({route}) => ({
              headerTitleStyle: {display: 'none'},
              headerLeft: () => {
                // TODO: Add Drawer
              },
              headerRight: () => {
                return (
                  <View style={{marginHorizontal: 16}}>
                    <Icon name="search" color={COLORS.gray700} size={22} />
                  </View>
                );
              },
              headerStyle: {
                backgroundColor: COLORS.primary200,
                shadowOffset: 0,
              },
              tabBarShowLabel: false,
              tabBarInactiveTintColor: COLORS.gray700,
              tabBarStyle: styles.tabBarStyle,
              tabBarActiveTintColor: COLORS.primary800,
              tabBarIcon: ({color, size, focused}) => {
                // TODO: Render Icons based on Route
                let iconName;
                switch (route.name) {
                  case ROUTES.HOME:
                    iconName = focused ? 'home' : 'home-outline';
                    break;
                  case ROUTES.CART:
                    iconName = focused ? 'cart' : 'cart-outline';
                    break;
                  case ROUTES.WISHLIST:
                    iconName = focused ? 'heart' : 'heart-outline';
                    break;
                }

                return <Icon name={iconName} color={color} size={size} />;
              },
            })}>
            <BottomTabs.Screen name={ROUTES.HOME} component={HomeScreen} />
            <BottomTabs.Screen name={ROUTES.CART} component={CartScreen} />
            <BottomTabs.Screen
              name={ROUTES.WISHLIST}
              component={WishlistScreen}
            />
          </BottomTabs.Navigator>
        </NavigationContainer>
      </WishlistContextProvider>
    </CartContextProvider>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: 'white',
    borderTopWidth: 0,
    height: 92,
  },
});
