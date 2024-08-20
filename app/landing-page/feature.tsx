import { BorderBeam } from "@/components/magicui/border-beam";
import ShineBorder from "@/components/magicui/shine-border";

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="p-5 border rounded-lg shadow-md hover:scale-105 transition relative">
    <h4 className="mb-2 font-semibold">{title}</h4>
    <p>{description}</p>
    <BorderBeam size={120} duration={15} />
  </div>
);

export default Feature;
