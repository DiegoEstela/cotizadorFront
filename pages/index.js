import Link from "next/link";

function index() {
  return (
    <div class="flex justify-center content-center ">
  <div class="flex w-9/12 mt-11 max-w-lg p-6 rounded-lg shadow-lg flex-col h-2/4">
    <h1 class="text-gray-900 text-xl leading-tight font-medium mb-2 text-center mb-20 font-semibold	" >CALE VIAL</h1>
    <Link href='./home'>
    <button type="button" class="h-2/4 py-5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">
     Ingresar
      </button>
      </Link>
  </div>
</div>
  );
}

export default index;
