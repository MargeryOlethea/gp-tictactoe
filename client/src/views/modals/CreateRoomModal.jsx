import { useState } from "react";

/* eslint-disable react/prop-types */
function CreateRoomModal({ isOpen, onClose }) {
  const [createRoomData, setCreateRoomData] = useState({
    name: "",
    status: "",
    password: "",
  });

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

        <div
          className={
            "fixed bg-white w-2/6 min-h-4/6 rounded-3xl shadow-lg flex"
          }
        >
          <div className="p-10 w-full h-full">
            <p className="text-2xl font-bold text-gray-800">Create Room</p>
            <form className="text-gray-800 mt-8 space-y-5">
              <div>
                <label className="font-medium">Name</label>
                <input
                  type="text"
                  required
                  placeholder="room name"
                  className="py-3 px-5 w-full rounded-2xl shadow-inner bg-gray-100 mt-2"
                  onChange={(e) =>
                    setCreateRoomData({
                      ...createRoomData,
                      ["name"]: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="font-medium">Status</label>
                <select
                  defaultValue={"Public"}
                  required
                  className="py-3 px-5 w-full rounded-2xl shadow-inner bg-gray-100 mt-2"
                  onChange={(e) =>
                    setCreateRoomData({
                      ...createRoomData,
                      ["status"]: e.target.value,
                    })
                  }
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>
              {createRoomData.status === "Private" && (
                <div>
                  <label className="font-medium">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="room password"
                    className="py-3 px-5 w-full rounded-2xl shadow-inner bg-gray-100 mt-2"
                    onChange={(e) =>
                      setCreateRoomData({
                        ...createRoomData,
                        ["password"]: e.target.value,
                      })
                    }
                  />
                </div>
              )}
              <div>
                <button className="w-2/6 mt-3 px-4 py-2 text-white font-medium bg-orange-600 hover:bg-orange-500 active:bg-orange-600 rounded-lg duration-150">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateRoomModal;