import Header from "../../components/header";
import { StyledHome } from "./styles";
import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/user";
import Button from "../../components/button";
import ModalCashOut from "../../components/modalContact";

function Home() {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Header logOutButton={true} />
      <StyledHome>
        <Slide direction="up" mountOnEnter in={true} timeout={1000}>
          <Box>
            <div className="container">
              <div className="user-box">
                <div>
                  <h4>@{user?.fullName}</h4>
                  <h5>{user.email}</h5>
                </div>
                <Button
                  onClick={() => setShowModal(true)}
                  name="Add Contato"
                  type="button"
                  width="10vw"
                />
              </div>
              <div className="transactions-box">
                <ul>
                  {user?.contacts?.map((contact, index) => {
                    return (
                      <li key={index}>
                        <div>
                          <p>{contact.fullName}</p>
                          <p>{contact.email}</p>
                          <p>{contact.phone}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Box>
        </Slide>
      </StyledHome>
      <ModalCashOut open={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default Home;
