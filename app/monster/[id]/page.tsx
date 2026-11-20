
import { getArchfiend } from "../monsterUtil";
import { Archfiend } from "@/types/monster";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const monster: Archfiend = getArchfiend(id);
  
  return <div>
    {Object.entries(monster).map(([key, value]) => (
      <li key={key}>
        <strong>{key}:</strong> {value}
      </li>
    ))}
  </div>;
}