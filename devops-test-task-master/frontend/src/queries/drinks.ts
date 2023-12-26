import { get } from './index';
import { IDrink } from '../models/drink';

const listDrinks = async (): Promise<IDrink[]> => {
  const res = await get('drinks');

  const { data } = await res.json();

  return data;
};

export default listDrinks;
