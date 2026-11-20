import { Offering } from "@/types/offering";
import { getOfferings } from "../offerringUtil";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const offering: Offering = getOfferings(id);

  return <div>
    {offering.id}
    {offering.name}
    {offering.category}
    {offering.mainType}
    {offering.subType}
    {offering.element}
    {offering.forceRatio}
    {offering.range}

    {Object.entries(offering.sizes).map(([key, value]) => (
      <div key={key}>
        {key}
      </div>
    ))}
  </div>;
}