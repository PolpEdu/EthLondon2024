import RatingProps from '@/components/rate-profile';

export default function RadialProgressBar({ className, progress, fill }: { className: string, progress: number, fill: string }) {

    const size = 500; // Size of the SVG
    const strokeWidth = 20; // Width of the stroke line
    const radius = (size - strokeWidth) / 2; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const offset = circumference - (progress / 100) * circumference; // Length of the stroke

    // The viewBox is set so that the center of the SVG is (0,0) for easier calculations
    return (
        <div className={`-rotate-180 ${className}`}>
            <svg width={size} height={size / 2} viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`}>
                {/* Background circle */}
                <circle
                    cx="0"
                    cy="0"
                    r={radius}
                    fill="transparent"
                    stroke="lightgray"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />
                {/* Foreground circle */}
                <circle
                    cx="0"
                    cy="0"
                    r={radius}
                    fill="transparent"
                    stroke={fill}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90)`} // Rotates the starting point to the top
                />
            </svg>
        </div>
    );
};