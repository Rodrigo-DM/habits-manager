import { useState } from "react";
import BackgroundModal from "../BackgroundModal";
import Button from "../Button";
import CardActivities from "../CardActivities";
import ModalNewActivity from "../ModalNewActivity";
import { ListContainer } from "./styles";

const ListActivities = ({ activities, setActiv, groupId }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <ListContainer>
      <BackgroundModal
        children={
          <ModalNewActivity
            close={closeModal}
            groupId={groupId}
            activities={activities}
            setActiv={setActiv}
          />
        }
        modal={modal}
      />
      <h3>Atividades</h3>
      <Button onClick={openModal}>Nova Atividade</Button>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <CardActivities
              activity={activity}
              activities={activities}
              setActiv={setActiv}
            />
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};

export default ListActivities;
