import {
  AlertTriangle,
  Archive,
  ArchiveRestore,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Dot,
  HelpCircle,
  LogOut,
  Plus,
  RefreshCw,
  Search,
  Star,
  StarOff,
  Trash2,
  User,
  X,
} from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;

// eslint-disable-next-line import/prefer-default-export
export const Icons = {
  Archive,
  ArchiveRestore,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  ArrowUpRight,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Dot,
  HelpCircle,
  LogOut,
  Plus,
  RefreshCw,
  Search,
  Star,
  StarOff,
  Trash2,
  User,
  X,
  ArchiveDisplay: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.5 21h1c3.771 0 5.657 0 6.828-1.172C20.5 18.657 20.5 16.771 20.5 13V6.998C20.355 7 20.15 7 20 7H4c-.15 0-.355 0-.5-.002V13c0 3.771 0 5.657 1.172 6.828C5.843 21 7.729 21 11.5 21m-2.424-9.883C9 11.301 9 11.534 9 12s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h3c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C15 12.699 15 12.466 15 12s0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077h-3c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541"
        clipRule="evenodd"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M2 5c0-.943 0-1.414.293-1.707C2.586 3 3.057 3 4 3h16c.943 0 1.414 0 1.707.293C22 3.586 22 4.057 22 5c0 .943 0 1.414-.293 1.707C21.414 7 20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293C2 6.414 2 5.943 2 5"
      />
    </svg>
  ),
  Home: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2c1.108 0 2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715c.519.948.519 2.092.519 4.38v1.522c0 3.9 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.521Z"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M9.447 15.398a.75.75 0 0 0-.894 1.205A5.766 5.766 0 0 0 12 17.75a5.766 5.766 0 0 0 3.447-1.147a.75.75 0 0 0-.894-1.206A4.266 4.266 0 0 1 12 16.25a4.266 4.266 0 0 1-2.553-.852Z"
      />
    </svg>
  ),
  Favorite: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="m10.413 8.498l.164-.294C11.21 7.068 11.527 6.5 12 6.5c.473 0 .79.568 1.423 1.704l.164.294c.18.323.27.484.41.59c.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888c.147.47-.273.96-1.111 1.941l-.217.254c-.238.278-.357.418-.41.59c-.055.172-.037.358 0 .73l.032.338c.127 1.308.19 1.962-.193 2.253c-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226c-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504c-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73c-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941c.146-.47.76-.61 1.99-.888l.319-.072c.35-.08.524-.119.665-.225c.14-.107.23-.268.41-.59"
      />
    </svg>
  ),

  Spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
