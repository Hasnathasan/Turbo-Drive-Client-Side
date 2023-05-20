import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditToy = () => {
    const toy = useLoaderData();
    const {_id, price, quantity, description, productName} = toy;
    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedProduct = {price, quantity, description};
        
            Swal.fire({
              title: 'Do you want to save the changes?',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'Save',
              denyButtonText: `Don't save`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount == 0){
                    Swal.fire('Change something!', '', 'error')
                }
                else if(data.modifiedCount > 0){
                  Swal.fire("Product Updated","","success")
                }
            })
                
              } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
              }
            })

    }
    console.log(toy);
    return (
        <div className="w-full bg-white rounded-lg shadow mx-auto  md:mt-0 sm:max-w-md p-10">
            <form onSubmit={handleUpdate} className="space-y-4 md:space-y-6" action="#">
              <div>
                <h2 className='text-base md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#da8deb] from-[#47dcd1]'>Edit: {productName}</h2>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2 focus:border-primary2 block w-full p-2.5 "
                  defaultValue={price}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  defaultValue={quantity}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary1 focus:border-primary2 block w-full p-2.5 "
                  required
                />
              </div>
              <div>
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" name="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary2 focus:border-primary2" required defaultValue={description}></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary2 hover:bg-primary1 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Update Product
              </button>
            </form>
        </div>
    );
};

export default EditToy;