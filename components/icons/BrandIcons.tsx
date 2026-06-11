import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

const iconDefaults = "h-6 w-6 shrink-0";

export function StageAspirantIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="m8 16 4-4 4 4" />
    </svg>
  );
}

export function StagePartantIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <path d="M2 16h20l-2-6H4l-2 6Z" />
      <path d="M12 4v6M9 7l3-3 3 3" />
      <circle cx="7" cy="19" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="17" cy="19" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StageNouveauIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.5Z" />
      <path d="M10 21v-6h4v6" />
    </svg>
  );
}

export function StageEtabliIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <path d="M12 3 14.5 8.5 20.5 9.2 16.2 13.2 17.3 19 12 16.2 6.7 19 7.8 13.2 3.5 9.2 9.5 8.5 12 3Z" />
    </svg>
  );
}

export function PillarGuideIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <path d="M4 19V5l8-2 8 2v14" />
      <path d="M8 11h8M8 15h5" />
      <path d="M12 3v16" />
    </svg>
  );
}

export function PillarCommunityIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
      <path d="M15 20c0-2.2 1.5-3.5 4-3.5" />
    </svg>
  );
}

export function PillarJourneyIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 16c3-2 5-4 8-8" />
      <path d="M14 8h4v4" />
    </svg>
  );
}

export function ProblemAdminIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
      <path d="M14 2v6h6M8 13h8M8 17h5" />
    </svg>
  );
}

export function ProblemIsolationIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M19 8v6M22 11h-6" opacity="0.5" />
    </svg>
  );
}

export function ProblemInfoIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  );
}

export function CompareYesIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 10.2 8.8 12.5 13.5 7.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CompareNoIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.5 7.5 12.5 12.5M12.5 7.5 7.5 12.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ComparePartialIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 10h7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className={cn("h-12 w-12", className)}
      aria-hidden
    >
      <path d="M14 28c0-4.4 3.6-8 8-8V14C12.5 14 6 20.5 6 28v6h12v-6Zm20 0c0-4.4 3.6-8 8-8V14c-9.5 0-16 6.5-16 14v6h12v-6Z" />
    </svg>
  );
}

export function ValueAuthenticityIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <path d="M12 21s-6-4.5-6-9a4 4 0 0 1 7-2.5A4 4 0 0 1 18 12c0 4.5-6 9-6 9Z" />
    </svg>
  );
}

export function ValueEmpowermentIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <path d="M12 19V5M7 10l5-5 5 5" />
      <path d="M5 19h14" />
    </svg>
  );
}

export function ValueInclusionIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.8 4 6 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6-4 9s1.5 6.2 4 9" />
    </svg>
  );
}

export function ValueReliabilityIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <path d="M12 3 4 7v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function MissionIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  );
}

export function VisionIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconDefaults, className)}
      aria-hidden
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export const VALUE_ICONS = {
  "0": ValueAuthenticityIcon,
  "1": ValueEmpowermentIcon,
  "2": ValueInclusionIcon,
  "3": ValueReliabilityIcon,
  "4": PillarCommunityIcon,
} as const;

export const STAGE_ICONS = {
  aspirant: StageAspirantIcon,
  partant: StagePartantIcon,
  nouveau: StageNouveauIcon,
  etabli: StageEtabliIcon,
} as const;

export const PILLAR_ICONS = {
  guide: PillarGuideIcon,
  community: PillarCommunityIcon,
  journey: PillarJourneyIcon,
} as const;

export const PROBLEM_ICONS = {
  admin: ProblemAdminIcon,
  isolation: ProblemIsolationIcon,
  info: ProblemInfoIcon,
} as const;
