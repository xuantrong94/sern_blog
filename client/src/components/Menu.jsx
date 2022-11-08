import React from "react";

const posts = [
    {
      id: 1,
      title:
        "Aliquid non illum officia iure eum recusandae!",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil enim exercitationem quaerat itaque quibusdam in adipisci saepe, architecto ea perspiciatis!",
      img: "https://images.pexels.com/photos/14093489/pexels-photo-14093489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title:
        "Aliquid non illum officia iure eum recusandae!",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil enim exercitationem quaerat itaque quibusdam in adipisci saepe, architecto ea perspiciatis!",
      img: "https://images.pexels.com/photos/13385172/pexels-photo-13385172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title:
        "Aliquid non illum officia iure eum recusandae!",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil enim exercitationem quaerat itaque quibusdam in adipisci saepe, architecto ea perspiciatis!",
      img: "https://images.pexels.com/photos/13766550/pexels-photo-13766550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title:
        "Aliquid non illum officia iure eum recusandae!",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil enim exercitationem quaerat itaque quibusdam in adipisci saepe, architecto ea perspiciatis!",
      img: "https://images.pexels.com/photos/14151466/pexels-photo-14151466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title:
        "Aliquid non illum officia iure eum recusandae!",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil enim exercitationem quaerat itaque quibusdam in adipisci saepe, architecto ea perspiciatis!",
      img: "https://images.pexels.com/photos/13458913/pexels-photo-13458913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
const Menu = () => {
  return <div><h1>Other posts you may like</h1>
  {posts&& posts.length > 0 && posts.map((post) => (
    <div className="post" key={post.id}>
        <img src={post.img} alt="" />
        <h2>{post.title}</h2>
        <button className="button">Read More</button>
    </div>
  ))}</div>;
};

export default Menu;
