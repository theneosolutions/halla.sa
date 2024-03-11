function Model({ children, isOpen, onclose, padding }) {
  return (
    <>
      {isOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          className="bg-gray-200 bg-opacity-30 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
        >
          <div className="relative pb-5  rounded-2xl shadow dark:bg-gray-700 md:w-2/5	 w-11/12 backgroud-primary	">
            <div className="flex items-center justify-between py-2 px-3  rounded-t dark:border-gray-600">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => onclose()}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <div
              className={` pb-5 items-center  justify-center flex  ${
                padding === false ? "px-0" : "px-5"
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Model;
