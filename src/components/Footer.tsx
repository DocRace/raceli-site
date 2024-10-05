export default function Footer() {
  const showWeChatInfo = () => {
    alert("WeChat: DocRace\n\nPlease specify your purpose when adding as a friend.");
  };

  return (
    <footer className="bg-light-gray dark:bg-dark-gray backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6">
            <a href="mailto:callmerace@hotmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Email: callmerace@hotmail.com
            </a>
            <a href="https://x.com/melitosnap" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              X (Twitter): @melitosnap
            </a>
            <a href="https://t.me/raceli" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Telegram: @raceli
            </a>
            <button 
              onClick={showWeChatInfo} 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-left"
            >
              WeChat: DocRace
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}