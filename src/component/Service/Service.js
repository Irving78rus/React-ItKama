import React from "react";
// @ts-ignore
import imgg from "../../assets/images/96.png";
 
import "../../../src/App.css";
import { NavLink } from "react-router-dom";

function Service() {
  return (
    <div>
      <div className="service container">
        <ul className="service-ul">
          <li className="service_li">
            <NavLink to="/Rent" className="service_block" id="service_block1">
              {" "}
              <img src={imgg} alt="imgg" />{" "}
              <div>
                <h5>
                  Аренда <br />
                  всего на свете
                </h5>
              </div>
            </NavLink>
          </li>

          <li className="service_li">
            <div className="line"></div>
          </li>

          <li className="service_li">
          <NavLink to= "/Sellbuy"><div className="service_block" id="service_block2">
                <img src={imgg} alt="imgg"/>
                <h5>
                  Куплю <br />
                  продам
                </h5>
              </div></NavLink>
             
          </li>

          <li className="service_li">
            <div className="line"></div>
          </li>

          <li className="service_li">
          <NavLink to= "/AllOrder"><div className="service_block" id="service_block3">
                <img src={imgg} alt="imgg"/>
                <h5>
                Совместные <br />
                  заказы
                </h5>
              </div></NavLink>
             
          </li>

          <li className="service_li">
            <div className="line"></div>
          </li>

          <li className="service_li">
          <NavLink to= "/give-accept"><div className="service_block" id="service_block4">
                <img src={imgg} alt="imgg"/>
                <h5>
                Отдам/ <br />
                  приму
                </h5>
              </div></NavLink>
            
          </li>
          <li className="service_li">
            <div className="line"></div>
          </li>

          <li className="service_li">
          <NavLink to={'/Profile'}><div className="service_block" id="service_block5">
                <img src={imgg} alt="imgg"/>
                <h5>
                Новости <br />
                  района
                </h5>
              </div></NavLink>
             
          </li>
          <li className="service_li">
            <div className="line"></div>
          </li>

          <li className="service_li">
          <NavLink to= "/Neighbors"><div className="service_block" id="service_block6">
                <img src={imgg} alt="imgg"/>
                <h5>
                Мои <br />
                  Соседи
                </h5>
              </div></NavLink>
             
          </li>
        </ul>
        <div className="under_li"></div>
      </div>
    </div>
  );
}

export default Service;
