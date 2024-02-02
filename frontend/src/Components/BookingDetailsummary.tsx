import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 p-5 border rounded-l border-slate-300 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>
      <div className="py-2 border-b">
        Location:
        <div className="font-bold">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</div>
      </div>
      <div className="flex justify-between">
        <div>
          Check-In
          <div className="font-bold">{checkIn.toDateString()}</div>
        </div>
        <div>
          Check-Out
          <div className="font-bold">{checkOut.toDateString()}</div>
        </div>
      </div>
      <div className="py-2 border-t border-b">
        Total length of stay:
        <div className="font-bold">
          {numberOfNights} Nights
        </div>
      </div>

      <div>
        Guests:
        <div className="font-bold">{adultCount} adults & {childCount} childs</div>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;
