import React from "react";
import {Link} from "react-router-dom";
import deleteIcon from '../assets/img/delete.png'
import editIcon from '../assets/img/editing.png'
import Menu from "../components/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?cs=srgb&dl=pexels-pixabay-302743.jpg&fm=jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>Karp</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={editIcon} alt="" />
            </Link>
            <img src={deleteIcon} alt="" />
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem error laboriosam voluptatum eos eaque!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, a! Recusandae facere aliquam voluptatem eaque dignissimos dolores et, sequi, totam unde quo nobis quibusdam est! Officiis, a. Dolore, esse. A.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, a! Recusandae facere aliquam voluptatem eaque dignissimos dolores et, sequi, totam unde quo nobis quibusdam est! Officiis, a. Dolore, esse. A.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, a! Recusandae facere aliquam voluptatem eaque dignissimos dolores et, sequi, totam unde quo nobis quibusdam est! Officiis, a. Dolore, esse. A.</p>
      </div>
      <div className="menu"><Menu /></div>
    </div>
  );
};

export default Single;
