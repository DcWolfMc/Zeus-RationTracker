import { Outlet, useNavigate } from "react-router-dom";
import { HeaderContainer, HeaderContent, LayoutContainer } from "./styles";
import logoImage from "../../assets/logo.svg"
export const HistoryLayout = () => {
  const navigate = useNavigate()
  return (
    <LayoutContainer>
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" onClick={()=> navigate("/")}/>
      </HeaderContent>
    </HeaderContainer>
      <Outlet />
    </LayoutContainer>
  );
};
