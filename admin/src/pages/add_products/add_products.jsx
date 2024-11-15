


export const AddProducts = ()=>{

    return  <div className="p-12  w-full">
    <form className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    <div>
    <label htmlFor="product-name" className="block text-lg text-light-purple">
        Product Name
      </label>
      <input type="text" className="input-field "/>
    </div>
     
    <div>
    <label htmlFor="product-name" className="block text-lg text-light-purple">
        Price
      </label>
      <input type="text" className="input-field "/>
    </div>
    <div>
    <label htmlFor="product-name" className="block text-lg text-light-purple">
        Category
      </label>
      <input type="text" className="input-field "/>
    </div>
    <div>
    <label htmlFor="product-name" className="block text-lg text-light-purple">
        Custome Print
      </label>
      <input type="text" className="input-field "/>
    </div>
      {/* <button
        type=""
        className="bg-red-500 text-white px-4 py-2 rounded w-52"
      >
        Add Product
      </button> */}
    </form>
  </div>
  
}