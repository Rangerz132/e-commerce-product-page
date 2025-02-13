import UserAvatar from "../assets/images/image-avatar.png";

const UserButton = (props: { onClick: () => void }) => {
  function handleOnClick() {
    props.onClick();
  }

  return (
    <div
      onClick={() => handleOnClick()}
      className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
    >
      <img src={UserAvatar} alt={"User avatar"} />
    </div>
  );
};

export default UserButton;
