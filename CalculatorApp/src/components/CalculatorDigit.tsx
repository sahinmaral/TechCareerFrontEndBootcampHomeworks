type ButtonType = {
  id: string;
  text: string;
  handleAction : (digit: string) => void
};

const CalculatorDigit: React.FC<ButtonType> = (props) => {
  const { id, text,handleAction } = props;

  return (
    <div id={id} className="buttons" onClick={() => handleAction(text)}>
      {text}
    </div>
  );
};

export default CalculatorDigit;
