import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [imagesData, setImagesData] = useState([]);
  const [firstImagesData, setFirstImagesData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const baseUrl = `https://picsum.photos/v2/list?page=${pageCount}&limit=12`;

  const fetchAllImages = useCallback(async () => {
    try {
      const { data } = await axios.get(baseUrl);

      let itemImage1 = [];
      let itemImage2 = [];
      for (let i = 0; i < data?.length; i++) {
        if (itemImage1.length < 3) {
          itemImage1.push(data[i]);
        } else {
          itemImage2.push(data[i]);
        }
      }

      setFirstImagesData(itemImage1);
      setImagesData(itemImage2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.log(error.message);
    }
  }, [baseUrl]);

  useEffect(() => {
    fetchAllImages();
  }, [fetchAllImages]);

  useEffect(() => {
    fetchAllImages();
  }, [pageCount]);

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 mb-5 md:mb-10">
        <div className="w-full h-full md:row-span-2 md:col-span-2">
          <img
            className="w-full h-full object-cover rounded-md"
            src={firstImagesData[0]?.download_url}
            alt="First Image"
          />
        </div>
        <div className="w-full h-full ">
          <img
            className="w-full h-full object-cover rounded-md"
            src={firstImagesData[1]?.download_url}
            alt="Second Image"
          />
        </div>
        <div className="w-full h-full ">
          <img
            className="w-full h-full object-cover rounded-md"
            src={firstImagesData[2]?.download_url}
            alt="Third Image"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {imagesData?.map((image) => (
          <div className="w-full h-[250px]" key={image?.id}>
            <img
              className="w-full h-full object-cover rounded-md"
              src={image?.download_url}
              alt="Image"
            />
          </div>
        ))}
      </div>
      {/* pagination */}
      <div className="flex items-center justify-center gap-[100px] my-10">
        <button
          className="flex items-center justify-center px-4 h-10 text-lg font-medium bg-blue-500 text-white hover:bg-blue-700 rounded-md"
          disabled={pageCount === 0 ? true : false}
          onClick={() => setPageCount(pageCount - 1)}
        >
          Previous
        </button>
        <button
          className="flex items-center justify-center px-4 h-10 ml-3 text-lg font-medium bg-blue-500 text-white hover:bg-blue-700 rounded-md"
          onClick={() => setPageCount(pageCount + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
