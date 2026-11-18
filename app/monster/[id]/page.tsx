
import { getMonster } from "../monsterUtil";
import { Monster } from "@/types/monster";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const monster: Monster = getMonster(id);
  
  return <div>
    {Object.entries(monster).map(([key, value]) => (
      <li key={key}>
        <strong>{key}:</strong> {value}
      </li>
    ))}
  </div>;
}