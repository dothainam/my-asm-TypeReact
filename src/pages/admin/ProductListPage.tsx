import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useQuery } from '@tanstack/react-query'
import { deleteProduct, getProducts } from '@/services/product'
import { Button } from '@/components/ui/button.tsx'
import { Link } from 'react-router-dom'

// Yêu cầu
// 1: Click vào nút delete sẽ show modal xác nhận xóa sản phẩm
// 2: Click vào nút edit sẽ chuyển hướng đến trang edit product

export default function ProductListPage() {
  const result = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  const products = result.data || []

  const handleClickDelete = (id: string) => {
    deleteProduct(id)
  }

  return (
    <div className=''>
      <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
        <Link to='/admin/products/create'>Add product</Link>
      </button>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] text-center'>ID</TableHead>
            <TableHead className='text-center'>Name</TableHead>
            <TableHead className='text-center truncate'>Description</TableHead>
            <TableHead className='text-center '>Image</TableHead>
            <TableHead className='text-center'>Price</TableHead>
            <TableHead className='text-center'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.id}>
              <TableHead className='w-[100px] text-center'>{index + 1}</TableHead>
              <TableCell className='font-medium text-center'>{product.name}</TableCell>
              <TableCell className='text-center'>{product.description}</TableCell>
              <TableCell className='flex justify-center items-center'>
                <img src={product.image} alt='' className='w-36 h-36 text-cente' />
              </TableCell>
              <TableCell className='text-center'>{product.price}</TableCell>
              <TableCell className='text-center '>
                <Button className='mr-1'>
                  <Link to={`/admin/products/${product.id}`}>Edit</Link>
                </Button>
                <Button onClick={() => handleClickDelete(product.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
