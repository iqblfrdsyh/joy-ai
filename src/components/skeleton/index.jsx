import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="w-[93%] sm:w-[900px] mx-auto">
      <div class="max-w-[300px] w-full flex items-center gap-3 mt-16">
        <div class="w-full flex flex-col gap-2 animate-pulse">
          <span class="h-3 w-3/5 rounded-lg bg-gray-200"></span>
          <span class="h-3 w-4/5 rounded-lg bg-gray-200"></span>
          <span class="h-3 w-full rounded-lg bg-gray-200"></span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
