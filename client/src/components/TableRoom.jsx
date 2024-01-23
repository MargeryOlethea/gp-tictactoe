import TableRoomRows from "./TableRoomRows";

export default function TableRoom() {
  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col mt-6">
          <div className=" -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle px-4 mt-5">
              <div className="overflow-hidden  md:rounded-lg">
                <div className="flex px-5 py-2.5 text-sm text-gray-500 rounded-xl bg-gray-50 mb-5 border">
                  <p className="w-2/12">Room Name</p>
                  <p className="w-2/12"> Mode</p>
                  <p className="w-3/12"> Status</p>
                  <p className="w-2/12"> Player 1</p>
                  <p className="w-2/12"> Player 2</p>
                  <p className="w-1/12"></p>
                </div>

                <TableRoomRows />
                <TableRoomRows />
                <TableRoomRows />

                <TableRoomRows />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
