import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { MdDelete } from "react-icons/md";
import React from "react";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<HotelFormData>();

  const existingImageUrls = watch("imageUrls");

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();
    setValue(
      "imageUrls",
      existingImageUrls.filter((url) => url !== imageUrl)
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Images</h2>
      <div className="border rounded p-4 flex flex-col gap-4">
        {existingImageUrls && (
          <div className="grid grid-cols-6 gap-4">
            {existingImageUrls.map((url, i) => (
              <div key={i} className="relative group">
                <img src={url} className="min-h-full object-cover" />
                <button
                  onClick={(event) => handleDelete(event, url)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                >
                  <MdDelete size="2rem" />
                </button>
              </div>
            ))}
          </div>
        )}

        <input
          multiple
          accept="image/*"
          className="w-full text-gray-700 font-normal"
          type="file"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totallength =
                imageFiles.length + (existingImageUrls?.length || 0);

              if (totallength === 0) {
                return "At least one image should be added";
              }
              if (totallength > 6) {
                return "Total number of images cannot be more than 6";
              }

              return true;
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <span className="text-red-500 text-sm font-bold">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};

export default ImagesSection;
