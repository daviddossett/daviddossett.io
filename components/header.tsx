export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-6">
      <h1 className="flex justify-items-center gap-2 text-base font-normal dark:text-slate-400">
        David Dossett
        <span className="text-2xl font-bold leading-3 text-blue-400">.</span>
        Seattle, WA
      </h1>
      <div>Toggle</div>
    </header>
  );
};
