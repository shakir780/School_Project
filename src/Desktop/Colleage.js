import React from "react";
import SideMenu from "../SidebarNav/SideBarNav";
import { Link } from "react-router-dom";
import {
  animate,
  motion,
  Override,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import MovingCloud from "../MovingClouds/MovingCloud";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import "./Colleage.css";

const Colleage = () => {
  return (
    <div>
      <SideMenu className="limittest" />
      <div className="computerscince-sections">
        <div className="left-section">
          <div className="right-arrow"></div>
          <div className="left-arrow"></div>
        </div>
        <div className="right-section">
          <div className="top-video">
            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              className="youtube-link"
            ></iframe>
          </div>
          <div className="pharmacy-main-title cards">
            <h1>Faculty of Pharmacy</h1>
            <p>
              ACU’s Faculty of Pharmacy is proudly in collaboration with Alberta
              University; one of Canada's largest research-intensive
              universities, allowing for faculty/student exchanges, and joint
              research and degree studies. The curriculum, which is also
              developed in accordance with the Canadian Standards of Higher
              Education, is designed to equip pharmacy graduates with a strong
              and unique academic base that balances both, application and
              theory.
            </p>
          </div>
          <div className="pharmacy-part1 mini-cards">
            <h1>Faculty Mission</h1>
            <p>
              The Faculty of Pharmacy at Ahram Canadian University offers an
              advanced educational program to graduate knowledgeable and
              proficient pharmacists who are able to compete at the local and
              regiona l levels, conduct pharmacy-related research and serve
              their local communities. All of this within the context of the
              community’s general and professional values.
            </p>
          </div>
          <div className="pharmacy-part2 mini-cards">
            <h1>Faculty Vision</h1>
            <p>
              The Faculty of Pharmacy at Ahram Canadian University aspires to be
              a pre-eminent center for pharmacy education and research in order
              to graduate distinct pharmacy cadres capable of serving the local
              and regional communities.
            </p>
          </div>
          <div className="pharmacy-part3 mini-cards">
            <h1>Faculty Departments</h1>
            <ol>
              <li>Department of Biochemistry (PBC)</li>
              <li>Department of Pharmacognosy (PCG)</li>
              <li>Department of Pharmaceutics (PCT)</li>
              <li>Department of Pharmacology (PCL)</li>
              <li>Department of Clinical Pharmacy pharmacy practice (PCP)</li>
              <li>Department of Pharmaceutical Chemistry (PCS)</li>
              <li>Department of Microbiology (PMB)</li>
            </ol>
          </div>{" "}
          <div className="pharmacy-part4 mini-cards">
            <h1>Ready to apply?</h1>
            <p>
              If you’re ready to find your place at the University of ACU we
              have everything you need to start your journey with us in one easy
              place.
            </p>

            <button className="defult-btn">
              <p className="btn-p">Applay now</p>

              <FontAwesomeIcon icon={faArrowRightLong} className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleage;
