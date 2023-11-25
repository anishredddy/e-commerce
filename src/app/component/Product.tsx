"use client";

import ProdCard from "./ProdCard";

const ProductList = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl ">Featured Products</h3>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        <ProdCard link="https://assets.ajio.com/medias/sys_master/root/20221220/KIpo/63a1dba6f997ddfdbde4df28/-473Wx593H-469412375-green-MODEL2.jpg" />
        <ProdCard link="https://assets.ajio.com/medias/sys_master/root/20231025/rvqz/653822c5afa4cf41f55ba597/-473Wx593H-466743676-blue-MODEL.jpg" />
        <ProdCard link="https://assets.ajio.com/medias/sys_master/root/20231025/9icu/65392e12afa4cf41f5605229/-473Wx593H-442348773-jetblack-MODEL.jpg" />
        <ProdCard link="https://assets.ajio.com/medias/sys_master/root/20230808/9x9d/64d2474aeebac147fcb45b0a/-473Wx593H-466434087-white-MODEL.jpg" />
        <ProdCard link="https://assets.ajio.com/medias/sys_master/root/20221220/jIp3/63a1d598aeb269659cf9ea83/-473Wx593H-469412415-white-MODEL.jpg" />
        <ProdCard link="https://assets.ajio.com/medias/sys_master/root/20231010/R4fd/6525266eddf77915192fb5ee/-473Wx593H-466691165-offwhite-MODEL.jpg" />
      </div>
    </div>
  );
};

export default ProductList;
