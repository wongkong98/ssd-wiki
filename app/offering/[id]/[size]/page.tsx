import { Offering, SIZES, SubOffering } from "@/types/offering";
import { getOfferingBySize, getOfferings } from "@/app/offering/offerringUtil";

export default async function Page({ params }: { params: Promise<{ id: string, size: SIZES }> }) {
  const { id, size } = await params;

  const offering = getOfferingBySize(id, size);

  return <div>
    {offering && Object.entries(offering).map(([key, value]) => (
      <div key={key}>
        {key}
        {value}
      </div>
    ))}
  </div>;
}