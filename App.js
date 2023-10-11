import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  CustomDrawer  from './src/Customdrawer';
import  Checkbox  from './pages/Checkbox';
import Alert from './pages/Alert';
import Divider from './pages/Divider';
import Dropdown from './pages/Dropdown';
import Modal from './pages/Modal';
import HelperText from './pages/HelperText';
import Menu from './pages/Menu';
import InputText from './pages/InputText';
import ProgressBar from './pages/ProgressBar';
import RadioButton from './pages/RadioButton';
import Switch from './pages/Switch';
import SegmentedButton from './pages/SegmentedButton';
import SectionList from './pages/SectionList';
import SearchBar from './pages/SearchBar';
import ScrollView from './pages/ScrollView'; 
import Surface from './pages/Surface';
import VirtualizeList from './pages/VirtualizeList';
import TouchableRipple from './pages/TouchableRipple';
import SnackBar from './pages/SnackBar';
import Collapse from './pages/Collapse';



const Drawer = createDrawerNavigator();



export default function App() {
  return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Component" drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Checkbox" component={Checkbox} />
          <Drawer.Screen name="Alert" component={Alert} />
          <Drawer.Screen name="Divider" component={Divider} />
          <Drawer.Screen name="Dropdown" component={Dropdown} />
          <Drawer.Screen name="Modal" component={Modal} />
          <Drawer.Screen name="HelperText" component={HelperText} />
          <Drawer.Screen name="Menu" component={Menu} />
          <Drawer.Screen name="InputText" component={InputText} />
          <Drawer.Screen name="ProgressBar" component={ProgressBar} />
          <Drawer.Screen name="RadioButton" component={RadioButton} />
          <Drawer.Screen name="Switch" component={Switch} />
          <Drawer.Screen name="SegmentedButton" component={SegmentedButton} />
          <Drawer.Screen name="SectionList" component={SectionList} />
          <Drawer.Screen name="SearchBar" component={SearchBar} />
          <Drawer.Screen name="ScrollView" component={ScrollView} />
          <Drawer.Screen name="Surface" component={Surface} />
          <Drawer.Screen name="VirtualizeList" component={VirtualizeList} />
          <Drawer.Screen name="TouchableRipple" component={TouchableRipple} />
          <Drawer.Screen name="SnackBar" component={SnackBar} />
          <Drawer.Screen name="Collapse" component={Collapse} />

</Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  txt: {
    flex: 1,
  },
  });