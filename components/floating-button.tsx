"use client";

interface FloatingButtonProps {
  logo?: string;
  link?: string;
  tooltipText?: string;
}

export default function FloatingButton({
  logo = "/eu-white.svg",
  link = "https://eulji-hf.netlify.app/",
  tooltipText = "드림데이즈 친구매칭 바로가기",
}: FloatingButtonProps) {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className='fixed bottom-8 right-8 z-40'>
      <div className='relative'>
        {/* 말풍선 툴팁 */}
        <div className='absolute bottom-full right-0 mb-5'>
          <div className='relative bg-[#FCFCFC] px-4 py-2 rounded-lg shadow-lg whitespace-nowrap'>
            <p className='text-sm font-medium text-gray-800'>{tooltipText}</p>
            {/* 말풍선 꼬리 */}
            <div className='absolute -bottom-2 right-6 w-4 h-4 bg-[#FCFCFC] transform rotate-45 shadow-lg' />
          </div>
        </div>

        {/* 동그란 버튼 */}
        <button
          onClick={handleClick}
          className='w-16 h-16 bg-[#FF6000] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center overflow-hidden border-2 border-[#FF6000]'
          aria-label={tooltipText}
        >
          <img src={logo} alt='로고' className='w-10 h-10 object-contain' />
        </button>
      </div>
    </div>
  );
}
