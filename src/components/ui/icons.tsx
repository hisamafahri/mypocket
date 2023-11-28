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
  Search,
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
  Search,
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
  Lists: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122"
        opacity=".5"
      />
      <path
        fill="currentColor"
        d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 10.5A.75.75 0 0 1 7 9.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.25 14a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.5 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
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
