// Libraries
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import WishlistScreen from '../screens/WishlistScreen';

// Constants
import COLORS from '../constants/colors';
import ROUTES from '../constants/routes';

// Components
import CustomTabBar from '../components/navigation/CustomTabBar';
import CustomTabBarButton from '../components/navigation/CustomTabBarButton';

const BottomTabs = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={({route}) => ({
          headerTitleStyle: {display: 'none'},
          headerLeft: () => {
            // TODO: Add Drawer
          },
          headerRight: () => {
            // TODO: Add Search Icon
          },
          headerStyle: {backgroundColor: COLORS.primary200, shadowOffset: 0},
          tabBarShowLabel: false,
          tabBarInactiveTintColor: 'black',
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: 'blue',
          tabBarIcon: ({color, size, focused}) => {
            // TODO: Render Icons based on Route
          },
        })}>
        <BottomTabs.Screen
          name={ROUTES.HOME}
          component={HomeScreen}
          options={{
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
        <BottomTabs.Screen
          name={ROUTES.CART}
          component={CartScreen}
          options={{
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
        <BottomTabs.Screen
          name={ROUTES.WISHLIST}
          component={WishlistScreen}
          options={{
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
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