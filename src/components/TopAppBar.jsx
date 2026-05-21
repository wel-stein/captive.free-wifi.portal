import Icon from './Icon.jsx';

export default function TopAppBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-surface border-b border-outline-variant flex justify-between items-center px-container-margin-mobile h-touch-target-min">
      <div className="flex items-center gap-2">
        <Icon name="directions_bus" className="text-primary" />
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          Express Bus
        </h1>
      </div>
      <button
        type="button"
        className="w-10 h-10 flex items-center justify-center hover:bg-surface-container transition-colors rounded-full text-on-surface-variant active:scale-95"
        aria-label="Account"
      >
        <Icon name="account_circle" />
      </button>
    </header>
  );
}
