import "./UserWidget.css";
function UserWidget({ user }) {
  return (
    <div className="userContainer">
      <p>{user.displayname}</p>
      <p className="mail">{user.email}</p>
      {user.displayname +
        " likes " +
        user.interests[0] +
        ", " +
        user.interests[1] +
        " and " +
        user.interests[2]}
      <p />
      <p>{user.note}</p>
    </div>
  );
}
function BecomePenpalWidget() {
  return (
    <div className="userContainer">
      <p>To become a Penpal go to</p>
      <p className="mail">
        <a
          className="green"
          href="https://github.com/peatord/pigeonbuddy"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          https://github.com/peatord/pigeonbuddy
        </a>
      </p>
      And follow the instructions in the README.md
      <p />
    </div>
  );
}

export { UserWidget, BecomePenpalWidget };
