interface PaperProps {
  children?: React.ReactNode;
}

const Paper = ({ children }: PaperProps) => {
  return (
    <div className="bg-white h-full md:h-[45rem] w-full shadow-xl shadow-yellow-700 rounded-sm mb-10">
      {children}
    </div>
  );
};

export default Paper;