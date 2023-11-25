import Icon from "./Icon";

interface PostCardProps {
  link: string;
}

const ProdCard = (props: PostCardProps) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3  space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100">
        <div
          className=" aspect-square object-cover rounded-md z-1"
          style={{
            backgroundImage: `url(${props.link})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex px-2 py-3">
          <Icon title="View" />
          <div className="ml-auto">
            <Icon title=" Add to Cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
