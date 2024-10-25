interface PaperProps {
  children?: React.ReactNode;
}

const Paper = ({ children }: PaperProps) => {
  return (
    <div className="bg-white w-full h-full shadow-xl shadow-yellow-700 rounded-sm mt-10 mb-10 overflow-y-auto">
      {children}
    </div>
  );
};

export default Paper;