import PropsTypes from "prop-types"
const userData = [
  {
    name: "Mohamed Dalha",
    city: "Sivagnagai",
    description: "Front-end Developer",
    skills: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT JS",
      "PYTHON",
      "SQL",
      "UI/UX",
      "PROBLEM SOLVING",
    ],
    online: true,
    profile: "image/Mohamed Dalha photo.JPG",
  },
  {
    name: "Mohamed Dalha",
    city: "Sivagnagai",
    description: "Front-end Developer",
    skills: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT JS",
      "PYTHON",
      "SQL",
      "UI/UX",
      "PROBLEM SOLVING",
    ],
    online: false,
    profile: "image/Dalha Photo.jpg",
  },
  {
    name: "Mohamed Dalha",
    city: "Sivagnagai",
    description: "Front-end Developer",
    skills: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT JS",
      "PYTHON",
      "SQL",
      "UI/UX",
      "PROBLEM SOLVING",
    ],
    online: false,
    profile: "image/Mohamed Dalha photo.JPG",
  },
];
function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro Online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img className="img" src={props.profile} alt="User" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="button">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export const Usercard = () => {
  return (
    <>
    {userData.map((user, index)=>(
      <User key={index}
      name={user.name}
      city={user.city}
      description={user.description}
      online={user.online}
      profile={user.profile}
      skills={user.skills}/>
    ))}
    </>
  )
    
};

/*<User
      name="Mohamed Dalha"
      city="Sivagnagai"
      description="Front-end Developer"
      skills={[
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT JS",
        "PYTHON",
        "SQL",
        "UI/UX",
        "PROBLEM SOLVING",
      ]}
      online={false}
      profile="image/Mohamed Dalha photo.JPG"
    />*/

    User.prototype={
      name:PropsTypes.string.isRequired,
      city:PropsTypes.string.isRequired,
      description:PropsTypes.string.isRequired,
      skills:PropsTypes.arrayOf(PropsTypes.string).isRequired,
      online:PropsTypes.bool.isRequired,
      profile:PropsTypes.string.isRequired,
    }