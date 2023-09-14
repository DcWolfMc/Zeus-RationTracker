import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Dimensions,
} from "react-native";
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
import {
  useFocusEffect,
  useIsFocused,
} from "@react-navigation/native";
import { NewPurchaseModal } from "../../components/NewPurchaseModal";
import { getPurchases } from "../../services/api";
import { PurchaseData } from "../../@types/purchaseData";
import { format, parseISO, sub } from "date-fns";
import { ptBR } from "date-fns/locale";
interface OverviewScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Overview">;
}

export const OverviewScreen: FunctionComponent<OverviewScreenProps> = ({
  navigation,
}) => {
  const focused = useIsFocused();
  const [purchases, setPurchases] = useState<PurchaseData[]>([]);
  const windowWidth = Dimensions.get("window").width;
  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (focused && !modalVisible) {
        async function CallApiData() {
          const response = await getPurchases();

          const sortedPurchasesData: PurchaseData[] = response.data.sort(
            (a, b) =>
              parseISO(b.date_of_purchase).getTime() -
              parseISO(a.date_of_purchase).getTime()
          );
          setPurchases(sortedPurchasesData);
          //console.log("getPurchases:", sortedPurchasesData);
        }
        CallApiData();
      }
    }, [focused, modalVisible])
  );

  function handleModal() {
    setModalVisible(false);
  }
  function hideModal() {
    setModalVisible(false);
  }
  return (
    <Container>
      <Header>
        <Logo source={require("../../../assets/logo.png")} />
        <HeaderButtonWrapper>
          <NewPurchaseButton onPress={() => setModalVisible(true)}>
            <NewPurchaseText textColor={"yellow"}>Nova Compra</NewPurchaseText>
            <Icon name="plus" size={20} color={defaultTheme.colors.gray_300} />
          </NewPurchaseButton>
          {/* <IconButton icon={"settings"} iconColor={defaultTheme.colors.yellow_300} iconSize={40}/> */}
        </HeaderButtonWrapper>
      </Header>
      <View>
        <ContentView>
          <InfoBoxScroller>
            <InfoBox monthsToSub={0} purchasesData={purchases} />
            <InfoBox monthsToSub={1} purchasesData={purchases} />
            <InfoBox monthsToSub={2} purchasesData={purchases} />
          </InfoBoxScroller>
          <PurchasesListWrapper>
            <PurchasesListHeader>
              <PurchasesListHeaderText>Compras</PurchasesListHeaderText>
              <PurchasesListHeaderText>
                {purchases && purchases.length + 1} Itens
              </PurchasesListHeaderText>
            </PurchasesListHeader>
            <PurchasesList style={{ flexGrow: 1 }}>
              {purchases.map((item) => {
                return (
                  <PurchaseListItem
                    key={item._id}
                    navigation={navigation}
                    purchaseId={item._id}
                    purchaseData={item}
                  />
                );
              })}
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
      <NewPurchaseModal
        visible={modalVisible}
        setModalVisible={() => setModalVisible}
        handleModal={() => handleModal()}
        onDismiss={() => hideModal()}
      />
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
