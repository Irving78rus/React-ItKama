import React from 'react';
// @ts-ignore
import imgg from "../../../src/img/96.png";
import '../../../src/App.css'

function Service() {
  return (
    <div  >
      <div className="service container">
      <ul className="service-ul">
        <li className="service_li">
          <a href="/Rent">
            <div className="service_block" id="service_block1">
              <img src={imgg} />
              <h5>
                Аренда <br />
                всего на свете
              </h5>
            </div>
          </a>
        </li>

        <li className="service_li">
          <div className="line"></div>
        </li>

        <li className="service_li">
          <a href="/Sellbuy">
            <div className="service_block" id="service_block2">
              <img src={imgg} />
              <h5>
                Куплю <br />
                продам
              </h5>
            </div>
          </a>
        </li>

        <li className="service_li">
          <div className="line"></div>
        </li>

        <li className="service_li">
          <a href="/AllOrder">
            <div className="service_block" id="service_block3">
              <img src={imgg} />
              <h5>
                Совместные <br />
                заказы
              </h5>
            </div>
          </a>
        </li>

        <li className="service_li">
          <div className="line"></div>
        </li>

        <li className="service_li">
          <a href="/give-accept">
            <div className="service_block" id="service_block4">
              <img src={imgg}/>
              <h5>
                Отдам/ <br />
                приму
              </h5>
            </div>
          </a>
        </li>
        <li className="service_li">
          <div className="line"></div>
        </li>

        <li className="service_li">
          <a href="">
            <div className="service_block" id="service_block5">
              <img src={imgg} />
              <h5>
                Новости <br />
                района
              </h5>
            </div>
          </a>
        </li>
        <li className="service_li">
          <div className="line"></div>
        </li>

        <li className="service_li">
          <a href="/Neighbors">
            <div className="service_block" id="service_block6">
              <img src={imgg} />
              <h5>
                Мои <br />
                Соседи
              </h5>
            </div>
          </a>
        </li>
      </ul>
      <div className="under_li"></div>
    </div>
 
    </div>
  );
}

export default Service;
