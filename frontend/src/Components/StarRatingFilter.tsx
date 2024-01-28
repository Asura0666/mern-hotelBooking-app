type Props = {
  selectedStars: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StarRatingFilter = ({ selectedStars, onChange }: Props) => {
  return (
    <div className="pb-5 border-b border-slate-300">
      <h2 className="mb-2 font-semibold text-md">Property Rating</h2>
      {["5", "4", "3", "2", "1"].map((star, i) => (
        <label key={i} className="flex items-center space-x-2">
          <input
            checked={selectedStars.includes(star)}
            type="checkbox"
            className="rounded"
            value={star}
            onChange={onChange}
          />
          <span>{star} Stars</span>
        </label>
      ))}
    </div>
  );
};

export default StarRatingFilter;
