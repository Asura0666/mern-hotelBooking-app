
import { hotelFacilities } from "../config/hotel-options-config";


type Props = {
  selectedFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};


const FacilitiesFilter = ({ selectedFacilities, onChange }: Props) => {
  return (
    <div className="pb-5 border-b border-slate-300">
      <h2 className="mb-2 font-semibold text-md">Facilities</h2>
      {hotelFacilities.map((facility, i) => (
        <label key={i} className="flex items-center space-x-2">
          <input
            checked={selectedFacilities.includes(facility)}
            type="checkbox"
            className="rounded"
            value={facility}
            onChange={onChange}
          />
          <span>{facility}</span>
        </label>
      ))}
    </div>
  );
}

export default FacilitiesFilter