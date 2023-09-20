import { ArrowLeft } from "phosphor-react";
import { BackButton, SearchFormContainer } from "./styles";
import { useNavigate } from "react-router-dom";
export const SearchForm = () => {
  const navigate = useNavigate();
  return (
    <SearchFormContainer>
      <BackButton onClick={() => navigate(-1)}>
        <ArrowLeft size={40} />
      </BackButton>
      <h1>SearchForm</h1>
    </SearchFormContainer>
  );
};
