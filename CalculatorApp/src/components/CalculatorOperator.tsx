type ButtonType = {
  id: string;
  text: string;
  handleAction: (event: React.MouseEvent<HTMLDivElement>) => void
};

const CalculatorOperator: React.FC<ButtonType> = (props) => {
  const { id, text,handleAction } = props;

  return (
    <div id={id} className="buttons" onClick={(e) => handleAction(e)}>
      {text}
    </div>
  );
};

export default CalculatorOperator;
