import React from 'react';
const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 bg-[#E4FDE1]">
      <div className='bg-[#0038FF] rounded-lg p-1'>
      <img src='logoo.png' alt='logo'className="m-4 w-16 h-16"></img>
      <div className="bg-[#0038FF] text-white  p-4  flex justify-between items-center">
      
        <button className="text-2xl">&#43;</button>
        <button className="text-2xl">&#x23FB;</button>
        
      </div>

      <div className="bg-[#0038FF]  text-white  p-4">
        <div className="flex flex-col items-start">
          <p className="text-lg mb-2 font-montestrat">Hello, Username</p>
          <p className="text-lg ">Have a nice day!</p>
        </div>
        </div>
      
      <div className="bg-[#0038FF] text-white mb-4 p-4 items-center">
      <div className="flex mb-4">
        <button className="bg-white text-black px-6 py-2 mr-2 rounded-full">
          In Progress
        </button>
        <button className="bg-white text-black px-6 py-2 rounded-full">
          Completed
        </button>
      </div>
      </div>
      
</div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2 text-black">Progress</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Cards with GST Filing */}
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-lg bg-[#0038FF] text-white relative flex flex-col items-center mb-4"
          >
            <div className="mb-2 flex items-center">
              <span
                role="img"
  aria-label="calendar"
                className="text-white text-4xl mr-2"
                style={{ marginLeft: '-2.5rem' }}>
                📅
              </span>
              <h2 className="text-xl">GST Filing</h2>
            </div>
            <div
              className="absolute top-0 right-0 m-2 text-white cursor-pointer"
            >
              &#x22EF;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;


