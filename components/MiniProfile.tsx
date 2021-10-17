function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img 
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://scontent-scl2-1.xx.fbcdn.net/v/t1.18169-9/13344607_10153869455279775_1735884074249157202_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MvgqxVmsBZsAX-0vtmW&_nc_ht=scontent-scl2-1.xx&oh=0cf3688592b7bbd959ac084dd1e68a56&oe=6190716D"
        alt="Johnplex"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">Johnplex United</h2>
        <h3 className="text-sm text-gray-400">
          Welcome to Instagram tal...
        </h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  )
}

export default MiniProfile
