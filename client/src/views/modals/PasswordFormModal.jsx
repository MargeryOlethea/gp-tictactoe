/* eslint-disable react/prop-types */
function PasswordFormModal({ isOpen, onClose }) {
  // CONDITION BUAT MODAL
  if (!isOpen) return null;

  // START RETURN
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50"
          onClick={onClose}
        ></div>

        <div className="fixed bg-white w-2/6 h-2/6 rounded-3xl shadow-lg flex">
          <div className="p-10 w-full h-full mt-5">
            <p className="text-lg font-bold text-gray-800">Insert Password</p>
            <input
              type="text"
              className="py-3 px-5 w-full rounded-2xl shadow-inner bg-gray-100 mt-5"
              placeholder="password"
            />
            <button className="w-2/6 mt-5 px-4 py-2 text-white font-medium bg-orange-600 hover:bg-orange-500 active:bg-orange-600 rounded-lg duration-150">
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordFormModal;