import MinusIcon from "../../assets/images/icon-minus.svg";
import PlusIcon from "../../assets/images/icon-plus.svg";

const IncrementButton = (props: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  function increaseAmount() {
    props.setValue((prevState) => prevState + 1);
  }

  function decreaseAmount() {
    if (props.value <= 0) {
      return;
    }
    props.setValue((prevState) => prevState - 1);
  }

  return (
    <div className="flex flex-row justify-between items-center bg-neutral-100 rounded-lg ">
      <div onClick={() => decreaseAmount()} className="p-7 cursor-pointer">
        <img src={MinusIcon} alt={"Minus icon"} />
      </div>
      <span className="font-bold">{props.value}</span>
      <div onClick={() => increaseAmount()} className="px-7 cursor-pointer">
        <img src={PlusIcon} alt={"Plus icon"} />
      </div>
    </div>
  );
};

export default IncrementButton;
