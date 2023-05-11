import "./Button.css";

function NewPenPalButton({ func }) {
  return (
    <button className="button" onClick={func}>
      Get a penpal!
    </button>
  );
}

function AddPenPalButton({ func }) {
  return (
    <button onClick={func} className="button">
      Be a penpal!
    </button>
  );
}

export { AddPenPalButton, NewPenPalButton };
