import Image from "next/image";

 const Model = ({ title, content, image, id }) => {
  return (
    <div className="absolute w-[100%] h-[100%] z-50">
      <Image src={image} alt={title} width={600} height={600} />
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};
export default Model;