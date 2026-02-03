const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex md:flex-row min-h-screen">
      <div className="hidden md:flex md:w-3/5 bg-red-400 items-center justify-center min-h-screen">
        asdasd
      </div>
      <div className="flex w-full md:w-2/5 items-center justify-center px-5">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
