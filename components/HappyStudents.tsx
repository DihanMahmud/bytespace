"use client";

const avatars = [
  "https://i.pravatar.cc/100?img=12",
  "https://i.pravatar.cc/100?img=32",
  "https://i.pravatar.cc/100?img=11",
  "https://i.pravatar.cc/100?img=5",
  "https://i.pravatar.cc/100?img=47",
  "https://i.pravatar.cc/100?img=33",
  "https://i.pravatar.cc/100?img=68",
];

export default function HappyStudents() {
  return (
    <div className="h-[121px] w-[258px] rounded-[17px] bg-white px-[15px] pt-[17px]">
      {/* Title */}
      <div className="text-[16px] font-medium leading-[20px] text-[#202020]">
        Happy Students
      </div>

      {/* Rating */}
      <div className="mt-[1px] flex h-[18px] items-center text-[13px] leading-[18px]">
        <span className="text-[#333]">4.5</span>

        <span className="ml-[3px] text-[#999]">
          (240)
        </span>

        <span className="ml-[3px] text-[19px] leading-[18px] text-[#c9ff00]">
          ★
        </span>
      </div>

      {/* Avatars + Count */}
      <div className="mt-[11px] flex items-center justify-between">
        <div className="flex items-center">
          {avatars.map((avatar, index) => (
            <div
              key={avatar}
              className={[
                "relative h-[32px] w-[32px] shrink-0 overflow-hidden",
                "rounded-full border-[1.5px] border-white",
                index !== 0 ? "-ml-[5px]" : "",
              ].join(" ")}
            >
              <img
                src={avatar}
                alt={`Student ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* 2K+ */}
        <div className="ml-[-1px] flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#c9ff00] text-[14px] font-medium text-[#202020]">
          2K+
        </div>
      </div>
    </div>
  );
}
