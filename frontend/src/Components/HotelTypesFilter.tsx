import { hotelTypes } from "../config/hotel-options-config";


type Props = {
  selectedHotelType: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};


const HotelTypesFilter = ({ selectedHotelType, onChange }: Props) => {
  return (
    <div className="pb-5 border-b border-slate-300">
      <h2 className="mb-2 font-semibold text-md">Hotel Type</h2>
      {hotelTypes.map((hotelType, i) => (
        <label key={i} className="flex items-center space-x-2">
          <input
            checked={selectedHotelType.includes(hotelType)}
            type="checkbox"
            className="rounded"
            value={hotelType}
            onChange={onChange}
          />
          <span>{hotelType}</span>
        </label>
      ))}
    </div>
  );
}

export default HotelTypesFilter