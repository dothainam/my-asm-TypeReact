import axiosInstance from "@/config/axiosinstande"
import { Product, ProductFormValue } from "@/types/Product"
import sleep from "@/ultis/sleep"



const getProducts = async (): Promise<Product[]> => {
  await sleep()
  const response = await axiosInstance.get('/products')
  return response.data
}

const deleteProduct = async (id:string) => {
  try {
    const confirm = window.confirm('Co muon xoa khong')
    if(confirm){
      await axiosInstance.delete(`/products/` + id)
    }
  } catch (error) {
    
  }
}
const getProduct = async (id:string): Promise<Product> => {
  await sleep()
  const response = await axiosInstance.get('/products/' + id)
  return response.data

}

const updateProduct = async (id:string, newValue: ProductFormValue): Promise<Product> => {
  await sleep()
  return axiosInstance.put(`/products/${id}`, newValue)
  
}

const createProduct = async (formValue: ProductFormValue) => {
  await sleep()
   return axiosInstance.post('/products' , formValue)
}
export {deleteProduct}
export { getProducts }
export {getProduct}
export {updateProduct}
export {createProduct}