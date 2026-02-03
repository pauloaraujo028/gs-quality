import { Gem } from "lucide-react";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center gap-x-2">
        <Gem size={30} />
        <h1 className="text-3xl font-semibold">Global Sync</h1>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
