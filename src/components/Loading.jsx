import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="absolute flex items-center justify-center start-0 top-0 z-50 size-full bg-main-dark/70">
      <AiOutlineLoading3Quarters
        size={56}
        className="text-secondary-dark animate-spin"
      />
    </div>
  );
};

export default Loading;
