type Props = {
  selectedPrice?: number;
  onChange: (value?: number) => void;
};

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
  return (
    <div>
      <h4 className="mb-2 font-semibold text-md">Max Price</h4>
      <select className="w-full p-2 border rounded-md focus:outline-none border-slate-300 "
        value={selectedPrice}
        onChange={(event) =>
          onChange(event.target.value ? +event.target.value : undefined)
        }
      >
        <option value=''>Select Max Price</option>
        {[2000,2500,3000,4000,5000,6000].map((price,i) => (
          <option key={i} value={price}>{price}</option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
