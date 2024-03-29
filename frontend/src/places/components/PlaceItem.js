import React, { useContext, useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceItem.css";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";
const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const auth = useContext(AuthContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const toogleMap = () => {
    setShowMap(!showMap);
  };
  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };
  const confirmDeleteHandler = () => {
    toggleDeleteModal();
    console.log("Deleting...");
  };
  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancle={toogleMap}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={toogleMap}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showDeleteModal}
        onCancle={toggleDeleteModal}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={toggleDeleteModal}>
              CANCLE
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it cant
          be undone later.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={toogleMap}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <React.Fragment>
                <Button to={`/places/${props.id}`}>EDIT</Button>
                <Button danger onClick={toggleDeleteModal}>
                  DELETE
                </Button>
              </React.Fragment>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
