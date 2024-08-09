import { p } from "doker/lib/mixins/formatting";
import React from "react";

function FilterJobs() {
  const FiltersCategories = [
    {
      type: "Location",
      array: [
        "Delhi",
        "Mumbai",
        "Pune",
        "Ahemdabad",
        "Noida",
        "Bengaluru",
        "Mohali",
        "Chandigarh",
      ],
    },
    {
      type: "Industry",
      array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
    },
    {
      type: "Salary",
      array: ["0-40k", "60-70k", "1lakh+"],
    },
  ];
  return (
    <div className="mt-3">
      <p className="font-bold ">Filter Jobs</p>
      <hr className="my-2" />
      <div>
        {FiltersCategories.map((cat, index) => (
          <div key={index}>
            <p className="font-bold my-2">{cat.type}</p>
            {cat.array.map((item, index) => (
              <div className="flex gap-2" key={index}>
                <input type="radio" name={cat.type} id="" />
                <label>{item}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterJobs;
