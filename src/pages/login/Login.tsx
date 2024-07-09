/* eslint-disable @typescript-eslint/no-explicit-any */

const Login = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="h-screen w-full flex justify-center items-center home text-white">
      <div className="rounded-lg bg-[#e9e9e920] p-10 ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center w-full gap-3">
            <input
              type="password"
              name="secret01"
              placeholder="secret 01"
              className="bg-[#e9e9e940] border border-transparent focus:border-gray-400 rounded px-4 py-[6px] md:py-2 2xl:py-3 w-full md:w-[320px] 2xl:w-[420px] duration-300 focus:outline-0 focus:bg-[#e9e9e900] placeholder:text-white/90"
            />
            <input
              type="password"
              name="secret02"
              placeholder="secret 02"
              className="bg-[#e9e9e940] border border-transparent focus:border-gray-400 rounded px-4 py-[6px] md:py-2 2xl:py-3 w-full md:w-[320px] 2xl:w-[420px] duration-300 focus:outline-0 focus:bg-[#e9e9e900] placeholder:text-white/90"
            />
          </div>
          <div>
            <button
              type="submit"
              className="relative mt-5 w-full border hover:border-transparent border-gray-400 hover:bg-[#e9e9e950] bg-[#e9e9e900] rounded duration-300 flex justify-center items-center h-11"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
