import React, { useState } from "react";
import arrow from "../../assets/img/arrow.svg";
import arrowHover from "../../assets/img/arrowHover.svg";
import closeListing2 from "../../assets/img/close.svg";
import closeHover from "../../assets/img/closeHover.svg";
import { useNavigate } from "react-router-dom";
import del from "../../assets/img/deleteListings.svg";
import delHover from "../../assets/img/deleteListingsHover.svg";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";
import img5 from "../../assets/img/5.jpg";
import img6 from "../../assets/img/6.jpg";
import img7 from "../../assets/img/7.jpg";
import img8 from "../../assets/img/8.jpg";
import img9 from "../../assets/img/9.jpg";
import img10 from "../../assets/img/10.jpg";
import img11 from "../../assets/img/11.jpg";
import img12 from "../../assets/img/12.jpg";
import img13 from "../../assets/img/13.jpg";
import "../../styles/modal.css";
import "../../styles/modalImgsSwitch.css";

const ModalListingsImgs = ({ closeModal }) => {
  const [activeSection, setActiveSection] = useState("EXTERIOR");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const handleCloseModal = () => {
    closeModal();
    navigate("/listingsAdmin");
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "EXTERIOR":
        return (
          <div className="flex d-flex align-items-start justify-content-start">
            <div className="imgFlex d-flex flex-wrap justify-content-start">
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img2} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img3} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img4} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img5} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img6} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img7} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img8} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img9} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img10} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img11} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img12} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img13} />
                <div
                  className="bgDel"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="prop">
                    <img
                      className={isHovered ? "delHover" : "del"}
                      src={isHovered ? delHover : del}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "LIVING ROOM":
        return (
          <div className="flex d-flex align-items-start justify-content-start">
            <div className="imgFlex d-flex flex-wrap justify-content-start">
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
              <div className="imgContainer1">
                <img className="flex-area1" src={img1} />
                <div className="bgDel">
                  <div className="prop">
                    <img className="del" src={del} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "BEDROOM 1":
        return <div>Content</div>;
      case "BEDROOM 2":
        return <div>Content</div>;
      case "BATHROOM 1":
        return <div>Content</div>;
      case "BATHROOM 2":
        return <div>Content</div>;
      case "BATHROOM 3":
        return <div>Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="modalContent1 d-flex flex-column">
      <div className="gobackContainer d-flex justify-content-between">
        <h2
          className="goBack"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleCloseModal}
        >
          <img
            className="arrow mb-1"
            src={isHovered ? arrowHover : arrow}
            alt="arrow"
          />
          Go Back
        </h2>
        <img
          className="closeListing2"
          src={isHovered ? closeHover : closeListing2}
          alt="close"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="modalNav">
        <ul className="ulModal">
          <li
            className={`liModal ${
              activeSection === "EXTERIOR" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("EXTERIOR")}
          >
            EXTERIOR
          </li>
          <li
            className={`liModal ${
              activeSection === "LIVING ROOM" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("LIVING ROOM")}
          >
            LIVING ROOM
          </li>
          <li
            className={`liModal ${
              activeSection === "BEDROOM 1" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("BEDROOM 1")}
          >
            BEDROOM 1
          </li>
          <li
            className={`liModal ${
              activeSection === "BEDROOM 2" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("BEDROOM 2")}
          >
            BEDROOM 2
          </li>
          <li
            className={`liModal ${
              activeSection === "BATHROOM 1" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("BATHROOM 1")}
          >
            BATHROOM 1
          </li>
          <li
            className={`liModal ${
              activeSection === "BATHROOM 2" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("BATHROOM 2")}
          >
            BATHROOM 2
          </li>
          <li
            className={`liModal b3 ${
              activeSection === "BATHROOM 3" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("BATHROOM 3")}
          >
            BATHROOM 3
          </li>
          <li className="option">Edit Sections</li>
          <li className="option">+ Add Photos</li>
        </ul>
      </div>
      <div className="sectionContent">{renderSectionContent()}</div>
    </div>
  );
};

export default ModalListingsImgs;
