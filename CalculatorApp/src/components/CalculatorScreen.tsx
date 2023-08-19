type ScreenResult = {
  result : string | undefined;
}

const CalculatorScreen: React.FC<ScreenResult> = (props) => {
  return <div className="screen">{props.result}</div>;
};

export default CalculatorScreen;
