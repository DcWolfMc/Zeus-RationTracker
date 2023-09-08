import React, { FunctionComponent, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes";
import {
  Container,
  Header,
  SimpleText,
  Logo,
  HeaderButtonWrapper,
  NewPurchaseButton,
  NewPurchaseText,
  Icon,
  InfoBoxScroller,
  PurchasesList,
  PurchasesListWrapper,
  PurchasesListHeader,
  PurchasesListHeaderText,
  ContentView,
} from "./styles";
import { defaultTheme } from "../../global/styles/theme";
import { IconButton } from "../../components/IconButton";
import { InfoBox } from "../../components/InfoBox";
import { PurchaseListItem } from "../../components/PurchaseListItem";
import { useNavigation } from '@react-navigation/native';
import { NewPurchaseModal } from "../../components/NewPurchaseModal";
interface OverviewScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Overview">;
}

export const OverviewScreen: FunctionComponent<OverviewScreenProps> = ({
  navigation,
}) => {
  const windowWidth = Dimensions.get("window").width;
  const [modalVisible, setModalVisible] = useState(false);

  function handleModal() {
    setModalVisible(false)
  }
  return (
    <Container>
      <Header>
        <Logo source={require("../../../assets/logo.png")} />
        <HeaderButtonWrapper>
          <NewPurchaseButton onPress={()=> setModalVisible(true)}>
            <NewPurchaseText textColor={"yellow"}>Nova Compra</NewPurchaseText>
            <Icon name="plus" size={20} color={defaultTheme.colors.gray_300} />
          </NewPurchaseButton>
          {/* <IconButton icon={"settings"} iconColor={defaultTheme.colors.yellow_300} iconSize={40}/> */}
        </HeaderButtonWrapper>
      </Header>
      <View>
      <ContentView>
        <InfoBoxScroller>
          <InfoBox />
          <InfoBox />
          <InfoBox />
        </InfoBoxScroller>
        <PurchasesListWrapper>
          <PurchasesListHeader>
            <PurchasesListHeaderText>Compras</PurchasesListHeaderText>
            <PurchasesListHeaderText>5 Itens</PurchasesListHeaderText>
          </PurchasesListHeader>
          <PurchasesList style={{flexGrow:1}}>
            <PurchaseListItem navigation={navigation} purchaseId="" />
            
            <PurchaseListItem navigation={navigation} purchaseId="" />
            
            <PurchaseListItem navigation={navigation} purchaseId="" />
            
            <PurchaseListItem navigation={navigation} purchaseId="" />

            <PurchaseListItem navigation={navigation} purchaseId="" />
            
            <PurchaseListItem navigation={navigation} purchaseId="" />
            
            <PurchaseListItem navigation={navigation} purchaseId="" />
            
            <PurchaseListItem navigation={navigation} purchaseId="" />
            
            <PurchaseListItem navigation={navigation} purchaseId="" />

            <PurchaseListItem navigation={navigation} purchaseId="" />
            
          </PurchasesList>
        </PurchasesListWrapper>
        </ContentView>
        </View>
        {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.viewModal}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */}
      <NewPurchaseModal modalVisible setModalVisible={setModalVisible} handleModal={handleModal}/>
    </Container>
  );
};
// const styles = StyleSheet.create({
//   centeredView: {
//     backgroundColor:"#000",
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   viewModal: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'flex-end',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });
