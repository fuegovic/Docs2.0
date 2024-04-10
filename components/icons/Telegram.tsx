export default function Telegram({
  className,
  ...props
}: {
  className: string
  props?: React.SVGProps<SVGSVGElement>
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient
          id="telegram_svg__a"
          x1="500"
          x2="500"
          y2="992.58"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2AABEE" />
          <stop offset="1" stopColor="#229ED9" />
        </linearGradient>
      </defs>
      <g fillRule="evenodd" transform="scale(.048)">
        <circle cx="500" cy="500" r="500" fill="url(#telegram_svg__a)" />
        <path
          d="M226.33 494.72c145.76-63.505 242.96-105.37 291.59-125.6 138.86-57.755 167.71-67.787 186.51-68.119 4.136-.073 13.384.952 19.375 5.813 5.058 4.105 6.45 9.65 7.116 13.541s1.495 12.756.836 19.683c-7.524 79.062-40.084 270.92-56.648 359.47-7.009 37.47-20.81 50.032-34.17 51.262-29.036 2.672-51.084-19.189-79.207-37.624-44.006-28.847-68.867-46.804-111.58-74.953-49.366-32.53-17.364-50.41 10.77-79.63 7.362-7.648 135.3-124.01 137.77-134.57.309-1.321.596-6.242-2.327-8.84s-7.239-1.71-10.352-1.004c-4.414 1.002-74.715 47.468-210.9 139.4-19.955 13.702-38.03 20.38-54.223 20.03-17.853-.387-52.194-10.095-77.723-18.394-31.313-10.178-56.2-15.56-54.032-32.846 1.128-9.004 13.528-18.212 37.197-27.624z"
          fill="#fff"
        />
      </g>
    </svg>
  )
}
