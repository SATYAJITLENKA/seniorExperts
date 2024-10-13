import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface blogDataType {
  id: number;
  tag: string;
  img: string;
  name: string;
  date: string;
  title: string;
  des: string;
}

const BlogCard = ({ img, tag, name, date, title, des }: blogDataType) => {
  return (
    <Card className="p-4 bg-gradient-to-br from-[#fef1f1] to-[#dcdcf7]">
      <div className="text-xs text-red-700 font-medium bg-white rounded-xl px-2 py-1 w-fit">
        {tag}
      </div>
      <div className="flex gap-4 items-center mt-3 px-1">
        <img src={img} alt="img" className="h-12 w-12 rounded-full" />
        <div >
          <h6 className="text-sm font-medium">{name}</h6>
          <p className="text-gray-600 text-sm">{date}</p>
        </div>
      </div>
      <CardHeader className="px-1">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-gray-500">
            {des}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default BlogCard;
