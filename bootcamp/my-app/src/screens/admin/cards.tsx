import React, { useState } from 'react';
import NavAdmin from '../../components/AdminNav';
import { Table, TableBody } from 'flowbite-react';


const Cards: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url('https://i.ytimg.com/vi/MxpD9h__49s/maxresdefault.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: '80%',
    width: '100%',
    maxHeight: '80%',
    height: '100%',
    margin: 'auto',
    opacity: 0.8
  };

  const [dataList, setDataList] = useState<DataItem[]>([]);
  interface DataItem {
    id: string;
    uuid: string;
    balance: number;
  }

  const [filteredData, setFilteredData] = useState(dataList);

  const [isModalItem, setModalItem] = useState(null);
  const [isModalLoadVisible, setModalLoadVisibility] = useState(false);
  const [isModalDeleteVisible, setModalDeleteVisibility] = useState(false);


  const handleToggleLoadModal = (item: any) => {
    setModalItem(item);
    setModalLoadVisibility(true);
    document.body.style.overflow = "hidden";
  };

  const handleToggleDeleteModal = (item: any) => {
    setModalItem(item);
    setModalDeleteVisibility(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="overflow-x-auto bg-cover flex flex-col" style={containerStyle}>
      {/* <form className="bg-gray-900 border-2 shadow-md rounded px-1 pt-2 pb-2 mb-4 w-[98%]"> */}
      <NavAdmin />
        <table className='m-auto'>
          <tr>
            <td>
              smaple
            </td>
            <td>
              smaple
            </td>
            <td>
              smaple
            </td>
            <td>
              smaple
            </td>
            <td>
              smaple
            </td>
            <td>
              smaple
            </td>

          </tr>
        </table>
    </div>
  );
};

export default Cards;


{/* <NavAdmin />
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-80" style={{maxWidth: '80%', width: '100%', maxHeight: '80%', height: '100%', margin: 'auto'}}>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-opacity-100">
          Add Card
        </a>
      </div> 

      <table className="overflow-y-auto mt-[2%] text-center">
            <thead className="pb-8">
              <tr className="uppercase">
                <th scope="col" className="text-xl font-extrabold">
                  UUID
                </th>
                <th scope="col" className="text-xl font-extrabold">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr
                  key={item.uuid}
                  className="border-sky-400 border-double hover:bg-red-500 hover:underline"
                >
                  <th className="py-3">{item.uuid}</th>
                  <td className="font-medium">₱ {item.balance}</td>
                  </tr>
              ))}
            </tbody>
          </table>
    
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-80" style={{maxWidth: '80%', width: '100%', maxHeight: '80%', height: '100%', margin: 'auto'}}>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-opacity-100">
            Add Card
          </a>
          
          <div className='mt-[4%] text-center columns-2 h-64'>
            <div className=''>
              <div className=" text-xl font-extrabold">
                UUID
              </div>

              <div className=" text-xl font-normal">
                12121212121
              </div>
              
            </div>

            <div>
              <div className="text-xl font-extrabold">
                BALANCE
              </div>
            </div>
          </div>

          
        </div>
        */}