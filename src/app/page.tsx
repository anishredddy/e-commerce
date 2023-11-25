import BillBoard from "./component/BillBoard";
import Message from "./component/Message";
import ProductList from "./component/Product";

export default function Home() {
  return (
    <>
      <div className="space-y-10 pb-10 ">
        <BillBoard />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList />
      </div>
    </>
  );
}
