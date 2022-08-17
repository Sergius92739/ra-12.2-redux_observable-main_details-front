import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/hooks';
import { servicesDetailsRequest } from '../../../slices/servicesSlice';
import '../List.scss';

interface Item {
  name: string;
  price: number;
  id: number;
}

export default function ListItem({ element }: { element: Item }) {
  const { name, price, id } = element;
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(servicesDetailsRequest({ clickedID: String(id) }))
  }

  return (
    <tr>
      <td ><Link id={String(id)} onClick={handleClick} to={'/ra-12.2-redux_observable-main_details-front/:id/details'}>{name}</Link></td>
      <td>{price}</td>
      <td>
        <span className='icon-edit'></span>
        <span className='icon-delete'></span>
      </td>
    </tr>
  )
}
